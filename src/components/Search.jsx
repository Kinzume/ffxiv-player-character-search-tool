import React, { useCallback, useEffect, useRef, useState } from "react";
import "../styles/Search.css";
import useCharSearch from "./useCharSearch";
import SearchData from "../data/SearchData.json";
import SearchData2 from "../data/SearchData2.json";
import SearchData3 from "../data/SearchData3.json";
import SearchData4 from "../data/SearchData4.json";
import SearchData5 from "../data/SearchData5.json";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, InputAdornment, Pagination, TextField } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { Container } from "@mui/system";
import SpeedDial from "@mui/material/SpeedDial";
import SearchField from "./SearchField";
import Skeleton from "@mui/material/Skeleton";
import SearchResults from "./SearchResults";
import SearchPagination from "./SearchPagination";

const Transition = React.forwardRef(function Transition(props, ref) {
  return (
    <Slide
      direction="up"
      ref={ref}
      {...props}
    />
  );
});
const SearchDataArr = [
  SearchData,
  SearchData2,
  SearchData3,
  SearchData4,
  SearchData5,
];
export default function Search() {
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState(SearchDataArr[0]);
  const [pagination, setPagination] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const searchPlayer = (name, page) => {
    if (name === "") return;
    setError(false);
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;
    const requestOptions = {
      method: "GET",
      redirect: "follow",
      signal: signal,
    };
    fetch(
      `https://xivapi.com/character/search?name=${name}&page=${page}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setResults(result);
        setPagination(result.Pagination.PageTotal);
        return setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        return setError(true);
      });
  };
  useEffect(() => {
    searchPlayer(query, page);
  }, [query, page]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <SpeedDial
        ariaLabel="Search Player"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SearchIcon />}
        onClick={handleClickOpen}
      ></SpeedDial>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "sticky" }}>
          <Toolbar>
            <IconButton
              onClick={handleClose}
              aria-label="close"
              sx={{ color: "#FFFFFF" }}
            >
              <CloseIcon />
            </IconButton>
            <SearchField setQuery={setQuery} />
          </Toolbar>
          <SearchPagination
            pagination={pagination}
            setPage={setPage}
          />
        </AppBar>
        <SearchResults
          results={results}
          loading={loading}
          error={error}
        />
      </Dialog>
    </div>
  );

  /* <article className="search">
       <input
        value={query}
        type="text"
        name=""
        id=""
        onChange={handleSearch}
      /> 
      {SearchData?.Results?.map((character) => (
        <p key={character?.ID}>{character?.Name}</p>
      ))}
 <input
        value={query}
        type="text"
        name=""
        id=""
        onChange={handleSearch}
      />
      {characters?.map((character, index) => {
        if (characters.length === index + 1) {
          return (
            <div
              ref={lastBookElementRef}
              key={character}
            >
              {character}
            </div>
          );
        } else {
          return <div key={character}>{character}</div>;
        }
      })} 
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>
    </article>
  };*/
}

// const [pageNumber, setPageNumber] = useState(1);

// const observer = useRef();
// const lastBookElementRef = useCallback(
//   (node) => {
//     if (loading) return;
//     if (observer.current) observer.current.disconnect();
//     observer.current = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting && hasMore) {
//         console.log(hasMore);
//         //   console.log("Visible");
//         setPageNumber((prevPageNumber) => prevPageNumber + 1);
//       }
//     });
//     if (node) observer.current.observe(node);
//   },
//   [loading, hasMore]
// );

// function handleSearch(e) {
//   setQuery(e.target.value);
//   setPageNumber(1);
// }
// function handleSearch(e) {
//   setQuery(e.target.value);
// }

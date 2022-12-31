import React, { useCallback, useRef, useState } from "react";
import "../styles/Search.css";
import useCharSearch from "./useCharSearch";
import SearchData from "../data/SearchData.json";
import SearchData2 from "../data/SearchData2.json";
import SearchData3 from "../data/SearchData3.json";
import SearchData4 from "../data/SearchData4.json";
import SearchData5 from "../data/SearchData5.json";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, InputAdornment, Pagination, TextField } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Container } from "@mui/system";
import SpeedDial from "@mui/material/SpeedDial";

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
  const [query, setQuery] = useState("Leo");
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(SearchDataArr[0]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event, page) => {
    setPage(SearchDataArr[page - 1]);
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
            <Container>
              <TextField
                fullWidth
                id="standard-basic"
                label="Search Player"
                variant="standard"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon
                        sx={[
                          {
                            color: alpha("#FFFFFF", 0.7),
                          },
                        ]}
                      />
                    </InputAdornment>
                  ),
                }}
                sx={[
                  {
                    m: 1,
                    "& .MuiInput-root": {
                      p: 1,
                    },
                    "& .MuiInput-input": {
                      color: alpha("#FFFFFF", 0.9),
                    },
                    backgroundColor: alpha("#FFFFFF", 0.15),
                    "&:hover": {
                      backgroundColor: alpha("#FFFFFF", 0.25),
                    },
                    "& label": {
                      color: alpha("#FFFFFF", 0.5),
                      p: 1,
                    },
                    "& label.Mui-focused": {
                      color: alpha("#FFFFFF", 0.7),
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: alpha("#FFFFFF", 0.7),
                    },
                  },
                ]}
              />
            </Container>
          </Toolbar>
          <Container>
            <Pagination
              size="large"
              count={SearchDataArr.length}
              onChange={handleChange}
              sx={{
                p: 1,
                "& .MuiPaginationItem-root": {
                  color: alpha("#FFFFFF", 1),
                },
                "& .MuiPagination-ul": {
                  justifyContent: "center",
                },
              }}
            />
          </Container>
        </AppBar>

        <Container>
          <List>
            {page?.Results?.map((character) => (
              <ListItem
                onClick={() => console.log(character?.ID)}
                key={character?.ID}
              >
                <ListItemText
                  primary={character?.Name}
                  secondary={character?.Server}
                />
                <Avatar
                  alt={character?.Name}
                  src={character?.Avatar}
                />
              </ListItem>
            ))}
          </List>
        </Container>
      </Dialog>
    </div>
  );

  /* <article className="search">
      <TextField
        id="outlined-basic"
        label="Player Character"
        variant="outlined"
        value={query}
        onChange={handleSearch}
      />



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
// const { characters, hasMore, loading, error } = useCharSearch(
//   query,
//   pageNumber
// );
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

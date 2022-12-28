import React, { useCallback, useRef, useState } from "react";
import "../styles/Search.css";
import useCharSearch from "./useCharSearch";
import SearchData from "../data/SearchData.json";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, Button } from "@mui/material";

export default function Search() {
  const [query, setQuery] = useState("Leo");
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
  function handleSearch(e) {
    setQuery(e.target.value);
  }

  return (
    <article className="search">
      <form action="">
        <TextField
          id="outlined-basic"
          label="Player Character"
          variant="outlined"
          value={query}
          onChange={handleSearch}
        />
        <Button>Search</Button>
      </form>
      <List>
        {SearchData?.Results?.map((character) => (
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

      {/* <input
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
      <div>{error && "Error"}</div>*/}
    </article>
  );
}

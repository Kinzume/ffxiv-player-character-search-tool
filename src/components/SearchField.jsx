import { alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { Container } from "@mui/material";

export default function SearchField({ setQuery }) {
  const [playerName, setPlayerName] = useState("");

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value === "") return;
    setQuery(e.target[0].value);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          value={playerName}
          onChange={handleChange}
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
      </form>
    </Container>
  );
}

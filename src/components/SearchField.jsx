import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

export default function SearchField({ handleSubmit }) {
  const [query, setQuery] = useState("");
  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
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
        onChange={handleChange}
      />
    </form>
  );
}

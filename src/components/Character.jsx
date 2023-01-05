import React from "react";
import "../styles/Utils.css";
import "../styles/Character.css";
import Profileinfo from "./Profileinfo";
import Profileimgicons from "./Profileimgicons";
import Profilestats from "./Profilestats";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Paper } from "@mui/material";

export default function Character({ data, loading, error }) {
  const matches = useMediaQuery("@media (min-width: 1536px)");

  return (
    <main className="character">
      <h1 className="sr-only">Character Profile: {data?.Character?.Name}</h1>
      <Paper
        elevation={3}
        sx={{ order: matches ? "0" : "1" }}
      >
        <Profileinfo
          data={data}
          loading={loading}
          error={error}
        />
      </Paper>
      <Paper
        elevation={3}
        sx={{ order: matches ? "1" : "0" }}
      >
        <Profileimgicons
          data={data}
          loading={loading}
          error={error}
        />
      </Paper>
      <Paper
        elevation={3}
        sx={{ order: "2" }}
      >
        <Profilestats
          data={data}
          loading={loading}
          error={error}
        />
      </Paper>
    </main>
  );
}

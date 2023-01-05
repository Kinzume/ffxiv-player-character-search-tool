import React, { useEffect, useState } from "react";
import "../styles/Search.css";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import SearchField from "./SearchField";
import SearchResults from "./SearchResults";
import SearchPagination from "./SearchPagination";
import Button from "@mui/material/Button";
import Container from "@mui/system/Container";
import { useMediaQuery } from "@mui/material";
import SearchData from "../data/SearchData.json";

const Transition = React.forwardRef(function Transition(props, ref) {
  return (
    <Slide
      direction="up"
      ref={ref}
      {...props}
    />
  );
});

export default function Search({ setId }) {
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState(SearchData);
  const [pagination, setPagination] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const matches = useMediaQuery("(min-width: 1200px)");
  useEffect(() => {
    if (query === "") return;
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
      `https://xivapi.com/character/search?name=${query}&page=${page}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setResults(result);
        setPagination(result.Pagination.PageTotal);
        return setLoading(false);
      })
      .catch((error) => {
        if (signal.aborted) return;
        console.log("error", error);
        return setError(true);
      });

    return () => {
      controller.abort();
      // console.log("Download aborted");
    };
  }, [query, page]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar sx={{ backgroundColor: "white", padding: "0.8rem" }}>
        <Container>
          <Button
            onClick={handleClickOpen}
            sx={{
              "&:hover": {
                backgroundColor: "#1769aa",
              },
              backgroundColor: "#2196f3",
              color: "white",
              width: "fit-content",
              marginY: "0.5rem",
              marginX: "0.5rem",
            }}
          >
            <SearchIcon sx={{ marginRight: "5px" }} />
            Search
          </Button>
        </Container>
      </AppBar>
      <Dialog
        fullScreen
        disableScrollLock={true}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        {/* sx={} */}

        <AppBar sx={{ position: "sticky" }}>
          <Toolbar
            sx={matches ? {} : { maxWidth: "1200px", marginRight: "auto" }}
          >
            {matches ? (
              <Container>
                <Button
                  onClick={handleClose}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#1769aa",
                    },
                    backgroundColor: "#2196f3",
                    color: "white",
                    width: "fit-content",
                  }}
                >
                  <CloseIcon sx={{ marginRight: "5px" }} />
                  Close
                </Button>
              </Container>
            ) : (
              <Button
                onClick={handleClose}
                sx={{
                  "&:hover": {
                    backgroundColor: "#1769aa",
                  },
                  backgroundColor: "#2196f3",
                  color: "white",
                  width: "fit-content",
                }}
              >
                <CloseIcon sx={{ marginRight: "5px" }} />
                Close
              </Button>
            )}
          </Toolbar>
          <Container>
            <SearchField setQuery={setQuery} />
          </Container>
          <SearchPagination
            pagination={pagination}
            setPage={setPage}
          />
        </AppBar>
        <SearchResults
          results={results}
          loading={loading}
          error={error}
          setId={setId}
          handleClose={handleClose}
        />
      </Dialog>
    </div>
  );
}

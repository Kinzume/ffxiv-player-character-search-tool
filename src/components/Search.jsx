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
const createUrl = (nameQuery, pageQuery) => {
  const endpoint = "https://xivapi.com/character/search?";
  let name, page;
  if (nameQuery === "") {
    name = "name=";
  } else {
    name = "name=" + nameQuery;
  }

  if (pageQuery === "") {
    page = "&page=";
  } else {
    page = "&page=" + pageQuery;
  }

  return endpoint + name + page;
};

const initialParams = {
  name: "Aila",
  page: 1,
};
export default function Search({ setId }) {
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState(SearchData);
  const [pagination, setPagination] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [params, setParams] = useState(initialParams);

  const matches = useMediaQuery("(min-width: 1200px)");
  useEffect(() => {
    setNoResults(false);
    setError(false);
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;
    const requestOptions = {
      method: "GET",
      redirect: "follow",
      signal: signal,
    };
    const endpoint = createUrl(params.name, params.page);
    fetch(endpoint, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        if (!result?.Results.length) {
          setNoResults(true);
          setPagination(result.Pagination.PageTotal);
          return setLoading(false);
        }
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
  }, [params]);

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
            <SearchField
              params={params}
              setParams={setParams}
            />
          </Container>
          <SearchPagination
            params={params}
            setParams={setParams}
            pagination={pagination}
          />
        </AppBar>
        <SearchResults
          results={results}
          noResults={noResults}
          loading={loading}
          error={error}
          setId={setId}
          handleClose={handleClose}
        />
      </Dialog>
    </div>
  );
}

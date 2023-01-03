import { Container, Pagination } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import React, { useState } from "react";

export default function SearchPagination({ pagination, setPage }) {
  const [pageNumber, setPageNumber] = useState(1);
  const handleChange = (event, page) => {
    console.log(page);
    setPageNumber(page);
    setPage(page);
  };
  return (
    <Container>
      <Pagination
        size="large"
        count={pagination}
        defaultPage={0}
        page={pageNumber}
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
  );
}

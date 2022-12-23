import React from "react";
import Classesandjobs from "./Classesandjobs";
import "../styles/Profileimgicons.css";
import Loader from "./Loader";
import Error from "./Error";

export default function Profileimgicons({ data, loading, error }) {
  const profileimgicons = {
    Name: (
      <h2>
        <span className="sr-only">Classes and Jobs: </span>
        {data?.Character?.Name}
      </h2>
    ),
    DC: <p>{data?.Character.DC}</p>,
    Server: <p>{data?.Character.Server}</p>,
    src: data?.Character?.Portrait,
  };

  return (
    <section>
      <div className="name-title">
        {loading ? (
          <Loader
            height={"2.5rem"}
            width={"20rem"}
          />
        ) : error ? (
          <Error
            height={"2.5rem"}
            width={"20rem"}
          />
        ) : (
          profileimgicons?.Name
        )}
        <div className="dc-server">
          {loading ? <Loader /> : error ? <Error /> : profileimgicons?.DC}
          <span style={{ paddingInline: "0.25rem" }}>&gt;</span>
          {loading ? <Loader /> : error ? <Error /> : profileimgicons?.Server}
        </div>
      </div>
      {loading ? (
        <Loader height={"437px"} />
      ) : error ? (
        <Error height={"437px"} />
      ) : (
        <img
          width="320px"
          height="437px"
          className="portrait"
          src={profileimgicons?.src}
          alt="portrait"
        />
      )}
      <Classesandjobs
        data={data}
        loading={loading}
        error={error}
      />
    </section>
  );
}

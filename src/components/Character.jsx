import React from "react";
import "../styles/Character.css";
import Classesandjobs from "./Classesandjobs";

export default function Character({ data }) {
  //   console.log(data?.Character?.Avatar);
  // console.log(data?.Character?.ClassJobs);
  //   console.log(data?.Character?.Name);
  //   console.log(data?.Character?.Portrait);

  return (
    <article className="character">
      {/* <img
        src={data?.Character?.Avatar}
        alt="avatar"
      /> */}
      <h1>{data?.Character?.Name}</h1>
      <img
        className="portrait"
        src={data?.Character?.Portrait}
        alt="portrait"
      />
      <Classesandjobs data={data} />
    </article>
  );
}

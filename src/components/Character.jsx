import React from "react";
import "../styles/Utils.css";
import "../styles/Character.css";
import Classesandjobs from "./Classesandjobs";
import Profileinfo from "./Profileinfo";
import Profilestats from "./Profilestats";

export default function Character({ data }) {
  //   console.log(data?.Character?.Avatar);
  // console.log(data?.Character?.ClassJobs);
  //   console.log(data?.Character?.Name);
  //   console.log(data?.Character?.Portrait);

  return (
    <main className="character">
      <h1 className="sr-only">Character Profile: {data?.Character?.Name}</h1>
      <Profileinfo data={data} />
      {/* <img
        src={data?.Character?.Avatar}
        alt="avatar"
      /> */}
      <section>
        <div className="name-title">
          <h2>
            <span className="sr-only">Classes and Jobs: </span>
            {data?.Character?.Name}
          </h2>
          <p>{`${data?.Character.DC} > ${data?.Character.Server}`}</p>
        </div>
        <img
          width="320px"
          height="437px"
          className="portrait"
          src={data?.Character?.Portrait}
          alt="portrait"
        />
        <Classesandjobs data={data} />
      </section>
      <Profilestats data={data} />
    </main>
  );
}

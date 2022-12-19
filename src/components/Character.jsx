import React from "react";
import "../character.css";

export default function Character({ data }) {
  //   console.log(data?.Character?.Avatar);
  console.log(data?.Character?.ClassJobs);
  //   console.log(data?.Character?.Name);
  //   console.log(data?.Character?.Portrait);

  const src = `https://xivapi.com/cj/1/samurai.png`;

  return (
    <article class="character">
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
      {data?.Character?.ClassJobs?.map((job, index) => {
        const srcTest = `https://xivapi.com/cj/1/`;
        let cj = job.UnlockedState.Name;
        cj = cj.replace(/\s/g, "").toLowerCase();
        // console.log(cj);
        return (
          <div
            key={job?.Name}
            className="flex"
          >
            {/* <p>{job?.Name}</p> */}
            <img
              title={job?.Name}
              className="icon"
              style={{
                backgroundColor:
                  index <= 3
                    ? "#3c50af"
                    : index > 3 && index <= 7
                    ? "#427234"
                    : index > 7 && index <= 19
                    ? "#813b3c"
                    : index > 19 && index <= 27
                    ? "#813b3c"
                    : "#b89a40",
              }}
              src={
                cj === "bluemage(limitedjob)"
                  ? "https://xivapi.com/cj/1/bluemage.png"
                  : `https://xivapi.com/cj/1/${cj}.png`
              }
              alt=""
            />
            <p>{job?.Level}</p>
          </div>
        );
      })}
    </article>
  );
}

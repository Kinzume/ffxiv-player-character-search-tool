import React from "react";
import "../styles/Character.css";

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
      <section className="cjs">
        {data?.Character?.ClassJobs?.map((job, index) => {
          let cj = job.UnlockedState.Name;
          cj = cj.replace(/\s/g, "").toLowerCase();
          return (
            <div
              key={job?.Name}
              className="cj"
            >
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
                      ? "#6d4db7"
                      : "#b89a40",
                }}
                src={
                  cj === "bluemage(limitedjob)"
                    ? "https://xivapi.com/cj/1/bluemage.png"
                    : `https://xivapi.com/cj/1/${cj}.png`
                }
                alt={cj}
              />
              <p>{job?.Level}</p>
            </div>
          );
        })}
      </section>
    </article>
  );
}

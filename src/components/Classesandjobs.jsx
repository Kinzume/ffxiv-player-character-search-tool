import React from "react";
import "../styles/Classesandjobs.css";
import Loader from "./Loader";
import Error from "./Error";

export default function Classesandjobs({ data, loading, error }) {
  return (
    <section className="cjs">
      {data?.Character?.ClassJobs?.map((job, index) => {
        let cj = job.UnlockedState.Name;
        cj = cj.replace(/\s/g, "").toLowerCase();
        return (
          <div
            key={job?.Name}
            className="cj"
          >
            {loading ? (
              <img
                width="24px"
                height="24px"
                className="icon-placeholder"
                style={{
                  animationDelay: `${index}s`,
                }}
                src="none.png"
              />
            ) : error ? (
              <img
                width="24px"
                height="24px"
                className="icon"
                src="none.png"
              />
            ) : (
              <img
                width="24px"
                height="24px"
                className="icon"
                src={
                  cj === "bluemage(limitedjob)" ? "bluemage.png" : `${cj}.png`
                }
                alt={cj}
              />
            )}
            {loading ? (
              <Loader height={"1rem"} />
            ) : error ? (
              <Error height={"1rem"} />
            ) : (
              <p>{job?.Level}</p>
            )}
          </div>
        );
      })}
    </section>
  );
}

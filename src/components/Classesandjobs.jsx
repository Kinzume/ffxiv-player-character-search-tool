import React from "react";
import "../styles/Classesandjobs.css";

export default function Classesandjobs({ data }) {
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
            <img
              width="24px"
              height="24px"
              className="icon"
              src={
                cj === "bluemage(limitedjob)"
                  ? "https://xivapi.com/cj/companion/bluemage.png"
                  : `https://xivapi.com/cj/companion/${cj}.png`
              }
              alt={cj}
            />
            <p>{job?.Level}</p>
          </div>
        );
      })}
    </section>
  );
}

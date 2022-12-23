import React from "react";
import "../styles/Utils.css";
import "../styles/Character.css";
import Profileinfo from "./Profileinfo";
import Profileimgicons from "./Profileimgicons";
import Profilestats from "./Profilestats";

export default function Character({ data, loading, error }) {
  //   console.log(data?.Character?.Avatar);
  // console.log(data?.Character?.ClassJobs);
  //   console.log(data?.Character?.Name);
  //   console.log(data?.Character?.Portrait);

  return (
    <main className="character">
      <h1 className="sr-only">Character Profile: {data?.Character?.Name}</h1>
      <Profileinfo
        data={data}
        loading={loading}
        error={error}
      />
      <Profileimgicons
        data={data}
        loading={loading}
        error={error}
      />
      <Profilestats
        data={data}
        loading={loading}
        error={error}
      />
    </main>
  );
}

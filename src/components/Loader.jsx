import React from "react";
import "../styles/Loader.css";

export default function Loader({ height, width }) {
  return (
    <div
      className="loader"
      style={{ height: `${height}`, width: `${width}` }}
    ></div>
  );
}

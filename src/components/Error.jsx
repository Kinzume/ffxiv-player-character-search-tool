import React from "react";
import "../styles/Error.css";

export default function Error({ height, width }) {
  return (
    <div
      className="error"
      style={{ height: `${height}`, width: `${width}` }}
    ></div>
  );
}

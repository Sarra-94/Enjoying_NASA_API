import React from "react";
import spinner from "../assets/spinner.gif";
const Loading = () => {
  return (
    <div className="loader">
      <img src={spinner} alt="load" />
      <h1>Loading Data! Wait Please... </h1>
    </div>
  );
};

export default Loading;

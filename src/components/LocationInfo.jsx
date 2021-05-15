import { useState } from "react";

const LocationInfo = ({ info, setClose, close }) => {
  return close ? (
    <div className="location-info">
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        onClick={() => {
          setClose(false);
        }}
      >
        {" "}
        <h2>Locarion-Info Evenets</h2>
        <h3>X</h3>
      </div>

      <ul>
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          Title: <strong>{info.title}</strong>
        </li>
      </ul>
    </div>
  ) : null;
};

export default LocationInfo;

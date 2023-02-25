import React from "react";
import flagImg from "../assets/flag.png"

const ProgressBar = (props) => {
  return (
    <div div className="progress-container">

      <div className="player-name">
        <h2> {props.playerName}</h2>
      </div>

      <div className="progressbar">
        <div
          className="current-progress"
          style={{
            backgroundColor: "black",
            width: `${props.progress}%`,
            height: "100%",
            borderTopRightRadius: "20%",
            borderBottomRightRadius: "20%",
          }}
        ></div>
      </div>

      <div className="destination-img">
        <img src={flagImg} alt="" />
      </div>
    </div>
  );
};

export default ProgressBar;

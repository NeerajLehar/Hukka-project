import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./progressCircle.scss";
import FeatherIcon from "feather-icons-react";
function ProgressCircle() {
  const percentage = 80;
  return (
    <div className="progressContainer">
      <div className="progressBar">
        <CircularProgressbarWithChildren
          value={percentage}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "butt",
            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,
            // Colors
            pathColor: `green`,
            textColor: "#ffff",
            trailColor: "#d6d6d6",
            backgroundColor: "#3e98c7",
          })}
        >
          <div style={{ fontSize: 32, fontWeight: 700, color: "white" }}>
            <strong>{percentage}</strong>%
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <div className="amountContainer">
        <div className="titleContainer">
          <p>ACTIVE WORKERS</p>
        </div>
        <div className="percentageContainer">
          <div className="iconContainer">
            <FeatherIcon
              icon="arrow-up-right"
              style={{ backgroundColor: "green", color: "white" }}
              size="24"
            />
            {/* <FeatherIcon icon="arrow-down-right" /> */}
          </div>
          <p>50%</p>
        </div>
      </div>
    </div>
  );
}

export default ProgressCircle;

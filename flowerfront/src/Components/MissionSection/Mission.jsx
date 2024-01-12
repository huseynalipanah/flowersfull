import React from "react";
import "./Mission.scss";
import MissionCard from "../MissionCard/MissionCard";
const Mission = () => {
  return (
    <div className="mission-section">
      <div className="mission">
        <MissionCard />
        <img
          src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/b4.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Mission;

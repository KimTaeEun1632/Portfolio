import React from "react";
import "./Badge.css";

const Badge = ({ item }) => {
  const badgeColorClass =
    item.projectType === "team" ? "badge-team" : "badge-personal";

  return (
    <div className={`badge-container ${badgeColorClass}`}>
      <p className="badge-text">
        {item.projectType === "team" ? "Team Project" : "Personal Project"}
      </p>
    </div>
  );
};

export default Badge;

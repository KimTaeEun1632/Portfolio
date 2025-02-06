import React from "react";
import "./Badge.css";

const Badge = ({ item }) => {
  const badgeColorClass =
    item.projectType === "team"
      ? "badge-team"
      : item.projectType === "personal"
      ? "badge-personal"
      : "badge-author";

  return (
    <div className={`badge-container ${badgeColorClass}`}>
      <p className="badge-text">
        {item.projectType === "team"
          ? "Team Project"
          : item.projectType === "personal"
          ? "Personal Project"
          : "작성자"}
      </p>
    </div>
  );
};

export default Badge;

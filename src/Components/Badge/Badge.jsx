import React from "react";
import "./Badge.css";

const Badge = ({ item, user }) => {
  const badgeColorClass =
    item.projectType === "team"
      ? "badge-team"
      : "badge-personal" || item.userId === user.id
      ? "badge-author"
      : null;

  return (
    <div className={`badge-container ${badgeColorClass}`}>
      <p className="badge-text">
        {item.projectType === "team"
          ? "Team Project"
          : "Personal Project" || item.userId === user.uid
          ? "작성자"
          : null}
      </p>
    </div>
  );
};

export default Badge;

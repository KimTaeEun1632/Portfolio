import React from "react";
import "./Star.css";

const Star = ({ star }) => {
  const stars = Array.from({ length: star }, (_, i) => (
    <span className="star" key={i}>
      ⭐
    </span>
  ));

  return <div className="star-wrapper">{stars}</div>;
};

export default Star;

import React from "react";
import "./ProjectDetail.css";

const ProjectDetailData = ({ item }) => {
  return (
    <div className="Detail-Wrap">
      <div className="Detail-content">
        <div>
          <h1 className="Detail-Name">{item.title}</h1>
          <p>OpenMind</p>
        </div>
      </div>
    </div>
  );
};

const ProjectDetail = ({ items }) => {
  console.log(items);
  return (
    <ul>
      {items.map((item) => {
        return <ProjectDetailData key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default ProjectDetail;

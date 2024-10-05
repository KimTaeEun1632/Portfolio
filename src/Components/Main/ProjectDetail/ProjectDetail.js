import React from "react";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  return (
    <div className="Detail-Wrap">
      <div className="Detail-content">
        <img src="/images/common.jpg" alt="이미지1" className="Detail-img" />
        <div>
          <h1 className="Detail-Name">오픈마인드</h1>
          <p>OpenMind</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

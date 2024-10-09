import React from "react";
import "./ProjectListBox.css";

const ProjectDetailData = ({ item }) => {
  return (
    <div className="image-wrapper">
      <img src={item.imgUrl} alt="이미지1" />
      <div className="project-detail-button">
        <button className="detail-button-hover">상세보기</button>
      </div>
      <p className="project-summation">{item.title}</p>
      <p className="project-technology">{item.technologies}</p>
    </div>
  );
};

const ProjectListBox = ({ items }) => {
  console.log(items);
  return (
    <ul className="ProjectListUl">
      {items.map((item) => {
        return <ProjectDetailData key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default ProjectListBox;

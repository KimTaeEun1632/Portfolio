import React from "react";
import "./ProjectListBox.css";
import { Link } from "react-router-dom";

const ProjectListData = ({ item }) => {
  return (
    <div className="image-wrapper">
      <img src={item.imgUrl} alt="이미지1" />
      <div className="project-detail-button">
        <Link to="/projectDetail" className="detail-button-hover">
          상세보기
        </Link>
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
        return <ProjectListData key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default ProjectListBox;

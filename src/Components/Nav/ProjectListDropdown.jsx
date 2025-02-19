import React from "react";
import { data } from "../../utils/data";
import { Link } from "react-router-dom";
import "./ProjectListDropdown.css";

const ProjectListDropdown = () => {
  const projects = data.project;

  return (
    <div className="projects-links-wrapper">
      {projects.map((project) => {
        return (
          <div key={project.id} className="project-link-container">
            <Link to={`/projectDetail/${project.id}#${project.subtitle}`}>
              <p>{project.subtitle}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectListDropdown;

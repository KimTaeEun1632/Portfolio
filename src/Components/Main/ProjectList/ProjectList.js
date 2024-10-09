import ProjectListBox from "../ProjectDetail/ProjectListBox";
import "./ProjectList.css";

function ProjectList({ items }) {
  return (
    <div className="projectListBox">
      <div className="projectListContent">
        <h1 className="projectListTitle">Projects</h1>
        <div className="projectList-wapper">
          <div className="projectListContainer">
            <ProjectListBox items={items} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectList;

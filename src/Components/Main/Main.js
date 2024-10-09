import React from "react";
import Banner from "./Banner/Banner";
import ProjectList from "./ProjectList/ProjectList";
import ProjectDetail from "./ProjectDetail/ProjectDetail";

const Main = ({ items }) => {
  return (
    <div>
      <Banner />
      <ProjectList />
      <ProjectDetail items={items} />
    </div>
  );
};

export default Main;

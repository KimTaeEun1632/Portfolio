import React from "react";
import Banner from "./Banner/Banner";
import ProjectList from "./ProjectList/ProjectList";

const Main = ({ items }) => {
  return (
    <div>
      <Banner />
      <ProjectList items={items} />
    </div>
  );
};

export default Main;

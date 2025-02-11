import React from "react";
import Banner from "./Banner/Banner";
import ProjectList from "./ProjectList/ProjectList";
import BoardSection from "./BoardSection/BoardSection";

const Main = ({ items }) => {
  return (
    <div>
      <Banner />
      <ProjectList items={items} />
      <BoardSection />
    </div>
  );
};

export default Main;

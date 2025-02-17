import React from "react";
import Banner from "./Banner/Banner";
import ProjectList from "./ProjectList/ProjectList";
import BoardSection from "./BoardSection/BoardSection";
import About from "./About/About";
import Footer from "../Footer/Footer";

const Main = ({ data }) => {
  return (
    <div>
      <Banner />
      <About data={data.about} />
      <ProjectList items={data.project} />
      <BoardSection />
      <Footer />
    </div>
  );
};

export default Main;

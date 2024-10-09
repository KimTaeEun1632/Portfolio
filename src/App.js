import React from "react";
import Nav from "./Components/Nav/Nav";
import Main from "./Components/Main/Main";
import items from "./mock.json";

const App = () => {
  return (
    <div>
      <Nav />
      <Main items={items} />
    </div>
  );
};

export default App;

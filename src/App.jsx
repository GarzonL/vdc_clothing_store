import React from "react";
import { render } from "react-dom";

import Contact from "./Contact";
import Description from "./Description";
import Login from "./Login";

function App() {
  return (
    <React.Fragment>
      <Contact />
      <Description />
      <Login />
    </React.Fragment>
  );
}

export default App;

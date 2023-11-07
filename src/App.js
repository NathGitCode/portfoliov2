import React, { useState } from "react";
import "./App.css";
import Projects from "./comps/projects/Projects";
import Info from "./comps/info/Info";
import NavBar from "./comps/navbar/NavBar";
import About from "./comps/about/About";
import Contact from "./comps/contact/Contact";
import Empty from "./comps/emptydiv/Empty";
import Wip from "./comps/workingon/Wip";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Empty />
      <NavBar setIsDark={setIsDark} isDark={isDark} />
      <Info />
      <About />
      <Projects />
      <Wip />
      <Contact />
    </div>
  );
}

export default App;

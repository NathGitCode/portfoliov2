import React from "react";
import "./App.css";
import Projects from "./comps/projects/Projects";
import Info from "./comps/info/Info";
import NavBar from "./comps/navbar/NavBar";
import About from "./comps/about/About";
import Contact from "./comps/contact/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Info />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

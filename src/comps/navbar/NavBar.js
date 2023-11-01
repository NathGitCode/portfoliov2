import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-bar-left">
        <h6>NathGitCode</h6>
      </div>
      <div className="nav-bar-right">
        <a id="homeanchor" href="#home">
          Home
        </a>
        <a id="aboutanchor" href="#about">
          About
        </a>
        <a id="projectsanchor" href="#projects">
          Projects
        </a>
        <a id="contactanchor" href="#contact">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

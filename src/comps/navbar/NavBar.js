import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-bar-left">
        <h6>NathGitCode</h6>
      </div>
      <div className="nav-bar-right">
        <a href="#home">Home</a>
        <a href="#techanchor">About</a>
        <a href="#proj">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default NavBar;

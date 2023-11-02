import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-bar-left">
        <h4>NathGitCode</h4>
      </div>
      <ul className="nav-bar-right">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#techanchor">About</a>
        </li>
        <li>
          <a href="#proj">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-bar-left">
        <h6>NathGitCode</h6>
      </div>
      <div className="nav-bar-right">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Projects</a>
        <a href="">Contact</a>
      </div>
    </nav>
  );
};

export default NavBar;

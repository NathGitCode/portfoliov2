import React from "react";
import "./NavBar.css";

const NavBar = ({ setIsDark, isDark }) => {
  return (
    <nav className="navbar">
      <div className="nav-bar-left">
        <div className="toggle-container">
          <input
            type="checkbox"
            id="check"
            className="toggle"
            onChange={() => setIsDark(!isDark)}
          />
          <label htmlFor="check">Dark mode</label>
        </div>
      </div>{" "}
      <section className="nav-bar-right">
        <div id="hamnav">
          <label for="hamburger">&#9776;</label>
          <input type="checkbox" id="hamburger" />
        </div>
        <ul id="hamitems">
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
      </section>
    </nav>
  );
};

export default NavBar;

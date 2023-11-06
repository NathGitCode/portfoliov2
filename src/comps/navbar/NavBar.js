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

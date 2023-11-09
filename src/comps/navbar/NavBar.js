import React from "react";
import "./NavBar.css";

const NavBar = ({ setIsDark, isDark, hamburger, setHamburger }) => {
  console.log(hamburger);
  const handleBurger = () => {
    if (hamburger === true) {
      setHamburger(false);
    }
    if (hamburger === false) {
      setHamburger(true);
    }
  };
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
        <ul id="navitems">
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
        </ul>{" "}
        <div id="hamnav">
          <div id="hamburgerBtn" onClick={() => handleBurger()}>
            <div className={hamburger ? "changebar1" : "bar1"}></div>
            <div className={hamburger ? "changebar2" : "bar2"}></div>
            <div className={hamburger ? "changebar3" : "bar3"}></div>
          </div>
          <ul className={hamburger ? "hamitems" : "hamNo"}>
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
        </div>
      </section>
    </nav>
  );
};

export default NavBar;

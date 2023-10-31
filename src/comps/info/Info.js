import React from "react";
import "./Info.css";
import piceofme from "./picofme.png";

const Info = () => {
  return (
    <div className="main-info-container">
      <div className="item-1">
        <header className="info-header">
          <h3>Full Stack Software Developer</h3>
        </header>
        <section className="info-desc">
          <p>
            Hi, i'm Nathan, Junior Full Stack Developer establishing a foothold
            in the tech community
          </p>
        </section>
        <div className="tech-stack">
          <h6>Tech Stack |</h6>
          <p>HTML5</p>
          <p>JS</p>
          <p>React</p>
        </div>
      </div>
      <img className="picofme" src={piceofme} alt="pic of me"></img>
    </div>
  );
};

export default Info;

import React from "react";
import "./Info.css";
import piceofme from "./picofme.png";
import linkedin from "./fi-xnsuxl-linkedin.svg";
import github from "./github-mark.svg";

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
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/nathan-stringer-082852273/"
            target="_blank"
            rel="noreferrer"
          >
            <img id="linkedin" src={linkedin} alt="linkedin"></img>
          </a>
          <a
            href="https://github.com/NathGitCode?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <img id="github" src={github} alt="github"></img>
          </a>
        </div>
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

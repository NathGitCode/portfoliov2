import React from "react";
import "./Projects.css";
import todolist from "./todolist.png";
import cats4lyf from "./cats4lyf.png";
import backend from "./instaclone backend.png";
import github from "../info/github-mark.svg";
import external from "./512px-External_link_font_awesome.svg.png";

const Projects = () => {
  return (
    <>
      <header className="projheaders">
        <h6>PORTFOLIO</h6>
        <h3>Three projects, some are WIP</h3>
      </header>
      <div id="projects" className="projects-container">
        <img className="todolist" src={todolist} alt="todolist"></img>
        <div className="proj-item-1">
          <h4>Header</h4>
          <p>Sample text</p>
          <div className="tech-stack-used">
            <h6>React</h6>
            <h6>CSS</h6>
            <h6>Express</h6>
            <h6>Sequelize</h6>
          </div>
          <div className="git-live">
            <a
              href="https://github.com/NathGitCode/react-to-do-list"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="github">
                Code
              </img>
            </a>
            <a
              href="https://react-to-do-list-gold.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={external} alt="external">
                Live Demo
              </img>
            </a>
          </div>
        </div>
        <div className="proj-item-2">
          <p>sample text</p>
        </div>
        <img className="cats4lyf" src={cats4lyf} alt="cats4lyf"></img>
        <img className="backend" src={backend} alt="backend"></img>
        <div className="proj-item-3">
          <p> sample text</p>
        </div>
      </div>
    </>
  );
};

export default Projects;

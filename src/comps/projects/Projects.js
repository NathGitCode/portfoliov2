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
        {/* instagram thing */}
        <img className="todolist" src={todolist} alt="todolist"></img>
        <div className="proj-item-1">
          <h4>Instagram like Website</h4>
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
              <div className="gitproj">
                <p className="projtext">Code</p>
                <img src={github} alt="github"></img>
              </div>
            </a>

            <a
              href="https://react-to-do-list-gold.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="demoproj">
                <p className="projtext">Live Demo</p>
                <img src={external} alt="external"></img>
              </div>
            </a>
          </div>
        </div>

        {/* cats4lyf */}
        <div className="proj-item-2">
          <h4>Cats Ecommerce</h4>
          <p>Sample text</p>
          <div className="tech-stack-used">
            <h6>React</h6>
            <h6>CSS</h6>
            <h6>Express</h6>
            <h6>Sequelize</h6>
          </div>
          <div className="git-live">
            <a
              href="https://github.com/MullaneyDev/groupProject2"
              target="_blank"
              rel="noreferrer"
            >
              <div className="gitproj">
                <p className="projtext">Code</p>
                <img src={github} alt="github"></img>
              </div>
            </a>

            <a
              href="https://felines-for-life.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="demoproj">
                <p className="projtext">Live Demo</p>
                <img src={external} alt="external"></img>
              </div>
            </a>
          </div>
        </div>
        <img className="cats4lyf" src={cats4lyf} alt="cats4lyf"></img>

        {/* backend stuff */}
        <img className="backend" src={backend} alt="backend"></img>
        <div className="proj-item-3">
          <h4>Backend</h4>
          <p>Sample text</p>
          <div className="tech-stack-used">
            <h6>React</h6>
            <h6>CSS</h6>
            <h6>Express</h6>
            <h6>Sequelize</h6>
          </div>
          <div className="git-live">
            <a
              href="https://github.com/MullaneyDev/instaCloneBack"
              target="_blank"
              rel="noreferrer"
            >
              <div className="gitproj">
                <p className="projtext">Code</p>
                <img src={github} alt="github"></img>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

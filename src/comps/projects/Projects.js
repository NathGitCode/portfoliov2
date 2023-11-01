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
          <h4>Instagram like website</h4>
          <p>
            Similair to Instagram where you can share photos with other users
          </p>
          <h5>Features</h5>
          <ul>
            <li>Add pictures to DB via web url with user relationship</li>
            <li>Get all pictures on users</li>
            <li>Full front-end connectivity</li>
            <li>Much more, check it out</li>
          </ul>

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
          <div className="stackused">
            <p>React</p>
            <p>CSS</p>
            <p>Express</p>
            <p>Sequelize</p>
          </div>
        </div>

        {/* cats4lyf */}
        <div className="proj-item-2">
          <h4>Cats Ecommerce</h4>
          <p>Buy cats online utilizing random cats from an API</p>
          <h5>Features</h5>
          <ul>
            <li>Add cats to basket and checkout</li>
            <li>Pulls 10 random cat images and stores them in state</li>
            <li>Only one API call on initial render</li>
          </ul>

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
          <div className="stackused">
            <p>React</p>
            <p>CSS</p>
          </div>
        </div>
        <img className="cats4lyf" src={cats4lyf} alt="cats4lyf"></img>

        {/* backend stuff */}
        <img className="backend" src={backend} alt="backend"></img>
        <div className="proj-item-3">
          <h4>Backend</h4>
          <p>Store information on a DB</p>
          <h5>Features</h5>
          <ul>
            <li>One to many relationship, user has many photos</li>
            <li>Good optimization of CRUD</li>
            <li>JWT on login user and BCRYPT password hash</li>
          </ul>

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
          <div className="stackused">
            <p>MySQL</p>
            <p>Express</p>
            <p>Sequelize</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

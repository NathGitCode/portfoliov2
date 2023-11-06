import React from "react";
import "./Projects.css";
import frontend from "./assets/instaclone frontend.png";
import cats4lyf from "./assets/cats4lyf.png";
import backend from "./assets/instaclone backend.png";
import { ReactComponent as Icon } from "../info/assets/github-icon-1-logo.svg";
import { ReactComponent as ExternalIcon } from "./assets/external-link.svg";

const Projects = () => {
  return (
    <>
      <header className="projheaders">
        <h4>PORTFOLIO</h4>
        <h3>Three projects, some are WIP</h3>
      </header>
      <div id="projects" className="projects-container">
        {/* instagram thing */}
        <img className="frontend" src={frontend} alt="frontend"></img>
        <div className="proj-item-1">
          <h4>Instagram like website</h4>
          <p>
            Similar to Instagram where you can share photos with other users
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
              <div className="gitdemo">
                <p className="projtext">Code</p>
                <Icon className="icon" />
              </div>
            </a>

            <a
              href="https://react-to-do-list-gold.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="gitdemo">
                <p className="projtext">Live Demo</p>
                <ExternalIcon className="icon" />
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
          <h4>Cats E-commerce</h4>
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
              <div className="gitdemo">
                <p className="projtext">Code</p>
                <Icon className="icon" />
              </div>
            </a>

            <a
              href="https://felines-for-life.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="gitdemo">
                <p className="projtext">Live Demo</p>
                <ExternalIcon className="icon" />
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
              <div className="gitdemo">
                <p className="projtext">Code</p>
                <Icon className="icon" />
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

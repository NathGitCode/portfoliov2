import React from "react";
import "./Wip.css";

import codingwip from "./assets/codeingwip.jpg";
import { ReactComponent as Icon } from "../info/assets/github-icon-1-logo.svg";
import { ReactComponent as ExternalIcon } from "../projects/assets/external-link.svg";

const Wip = () => {
  return (
    <div className="wip-container">
      <img id="codingwip" src={codingwip} alt="wip" />
      <div>
        <header>
          <h4 id="aboutme">WORK IN PROGRESS</h4>
          <h5 id="subhead">What am i currently working on?</h5>{" "}
        </header>
        <div className="wip-text">
          <p>Follow along on my creation of a weather app!</p>
          <p>
            I am creating this project out of personal need, because the native
            windows Weather App is full of adverts and the website version take
            too much ram
          </p>
          <p>
            Please check the dev branch as the published version will be behind
            a few commits
          </p>
          <div className="git-live">
            <a
              href="https://github.com/NathGitCode/Weatherapp"
              target="_blank"
              rel="noreferrer"
            >
              <div className="gitdemo">
                <p className="projtext">Code </p>
                <Icon className="projicon" />
              </div>
            </a>
            <a
              href="https://weatherapp-six-delta.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="gitdemo">
                <p className="projtext">Live Demo</p>
                <ExternalIcon className="projicon" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wip;

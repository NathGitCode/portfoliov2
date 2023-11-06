import React from "react";
import "./Wip.css";
import githublogo from "../info/assets/github-mark.svg";
import external from "../projects/assets/512px-External_link_font_awesome.svg.png";
import codingwip from "./assets/codeingwip.jpg";

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
              <div className="gitproj">
                <p className="projtext">Code</p>
                <img src={githublogo} alt="githublogo"></img>
              </div>
            </a>
            <a
              href="https://weatherapp-six-delta.vercel.app/"
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
      </div>
    </div>
  );
};

export default Wip;

import React, { useEffect, useRef, useState } from "react";
import "./Info.css";
import piceofme from "./assets/picofme.png";
import html5svg from "./assets/512px-HTML5_Badge.svg (1).png";
import javascript from "./assets/3799-javascript.jpg";
import css from "./assets/CSS3_logo.svg.png";
import reactimg from "./assets/React-icon.svg.png";
import mysql2 from "./assets/mysql-ar21.svg";
import nodepng from "./assets/nodejs-logo-FBE122E377-seeklogo.com.png";
import { ReactComponent as Icon } from "./assets/github-icon-1-logo.svg";
import { ReactComponent as LinkedIn } from "./assets/linkedin.svg";

const Info = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-250px" }
    );
    console.log(isIntersecting);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.querySelectorAll("div").forEach((el) => {
        el.classList.add("slide-in");
      });
    } else {
      ref.current.querySelectorAll("div").forEach((el) => {
        el.classList.remove("slide-in");
      });
    }
  }, [isIntersecting]);

  return (
    <main ref={ref}>
      <div className="main-info-container">
        <div className="item-1">
          <header className="info-header">
            <h1>Full Stack Software Developer</h1>
          </header>
          <section className="info-desc">
            <p>
              Hi, i'm Nathan, Junior Full Stack Developer establishing a
              foothold in the tech community based in Cheshire, England 👋
            </p>
          </section>
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/nathan-stringer-082852273/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn className="iconLn" />
            </a>
            <a
              href="https://github.com/NathGitCode?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <Icon className="icon" />
            </a>
          </div>
          <div id="techanchor" className="tech-stack">
            <h6>Tech Stack |</h6>
            <img src={html5svg} alt="html5"></img>
            <img src={css} alt="css"></img>
            <img src={javascript} alt="javascript"></img>
            <img src={reactimg} alt="react"></img>
            <img src={nodepng} alt="node"></img>
            <img id="sql" src={mysql2} alt="mysql"></img>
          </div>
        </div>

        <img className="picofme" src={piceofme} alt="pic of me"></img>
      </div>
    </main>
  );
};

export default Info;

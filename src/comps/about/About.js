import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import deskpic from "./Desk-Tidiness-LR.jpg";

const About = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-100px" }
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
      <div className="about-container">
        <img className="pic" src={deskpic} alt="deskpic"></img>
        <div className="about-items-1">
          <header>
            <h4 id="aboutme">ABOUT ME</h4>
            <h3 id="subhead">Junior Full Stack Software Developer</h3>
          </header>
          <section className="aboutme-info">
            <p id="proj">
              Hi, thanks for visiting my portfolio. I am a Junior Full Stack Dev
              who prides himself in creating and maintaining high quality
              websites and applications with smooth user interactions. I have
              worked in small and big teams throught my previous role as
              Mechanical Engineer and can work with others very well.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default About;

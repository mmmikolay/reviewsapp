import React from "react";
import NavBar from "../../components/NavBar/NavBar";

//STYLES
import "./about.css";

import AboutMe from "../../components/About/AboutMe";
import AboutProject from "../../components/About/AboutProject";

const About = () => {
  return (
    <>
      <div className="about-screen-container">
        <NavBar />
        <AboutMe />
        <AboutProject />
      </div>
    </>
  );
};

export default About;

import React from 'react'

//STYLES
import './about.css';

import AboutMe from '../../components/About/AboutMe';
import AboutProject from '../../components/About/AboutProject';

const About = () => {
    return (
    <>
        <div className="about-screen-container">
            <AboutMe />
            <AboutProject />
        </div>
    </>
    )
}

export default About;

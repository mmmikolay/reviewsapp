import React from 'react'
import { HomeButtonDark } from '../Buttons/HomeButton';

//STYLES
import './about.css';

const AboutMe = () => {
    return (
        <div className="container">
            <HomeButtonDark/>
            <h1>About Me</h1>
            <p>I am an electrical engineer specializing on the computer science branch. Did many things including attemting a MS degree on CompArch and an assistantship. Now I work as a web developer on the front-end side.</p>           
        </div>
    )
}

export default AboutMe;
import React from 'react'

//STYLES
import './about.css';

const AboutProject = () => {
    const contactUrl = `${process.env.PUBLIC_URL}/contact`

    return (
        <div className="container about-project">
            <div className="nav-background"></div>
            <div className="about-container">
                <h1>About This Project.</h1>
                <p>This is my first attempt of making a full-blown website. I like reading, watching things and playing games; I also like making short remarks about the things I like as an attempt to spread my enthusiasm to other people :).  This is an attempt to combine these two perks of mine (maybe I should've said four perks, or maybe two main perks and three sub-perks, I don't know). I know that the concept is pretty simple and even old-fashioned. In my defense, idea of combining two things I like was a big factor in me completing this project.</p>            
                <p>Things may seem like a little bit "over-designed". This is because of a silly idea of mine that the best way to show my proficiency also includes making things seem pretty. Anyway, thanks for visiting this site. If you want to work with me, or else give some professional advice, my contact info is <a href={contactUrl}>here</a>.</p>  
                </div>  
            </div>          
    );
}

export default AboutProject; 
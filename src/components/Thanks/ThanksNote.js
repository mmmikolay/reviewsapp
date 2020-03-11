import React from 'react'
import { HomeButtonDark } from '../Buttons/HomeButton';

//STYLES
import './thanksnote.css';

const ThanksNote = () => {
    return (
        <div className="thanks-note-container">
            <HomeButtonDark />
            <p>MY SPECIAL THANKS TO BEAUTIFUL PEOPLE HELPED ME FINISH THIS PROJECT...</p>
        </div>
    )
}

export default ThanksNote;

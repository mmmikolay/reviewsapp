import React from 'react'
import { useHistory } from 'react-router-dom';
import { MenuButtonIconLight, MenuButtonIconDark } from './GoBackButton';

//STYLES
import './homebutton.css';

export const HomeButtonDark = () => {
    let history = useHistory();

    const handleClick = () => {
        history.push('/');
    }

    return (
        <div className="home-button-container" onClick = {event => handleClick()}>
            <MenuButtonIconDark />
        </div>
    )
}

export const HomeButtonLight = () => {
    let history = useHistory();

    const handleClick =() => {
        history.push('/');
    }

    return (
        <div className="home-button-container right" onClick = {event => handleClick()}>
            <MenuButtonIconLight />
        </div>
    )
}


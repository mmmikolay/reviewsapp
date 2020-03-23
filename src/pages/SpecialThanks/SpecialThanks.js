import React from 'react'
import NavBar from '../../components/NavBar/NavBar';

// STYLES
import './specialthanks.css';

import PersonsList from '../../components/Thanks/PersonsList';
import ThanksNote from '../../components/Thanks/ThanksNote';

const SpecialThanks = () => {
    return (
    <>
        <div id="thanks">
            <NavBar/>
            <ThanksNote />
            <PersonsList />
        </div>
    </>
    )
}

export default SpecialThanks;

import React from 'react'

// STYLES
import './specialthanks.css';

import PersonsList from '../../components/Thanks/PersonsList';
import ThanksNote from '../../components/Thanks/ThanksNote';

const SpecialThanks = () => {
    return (
    <>
        <div id="thanks">
            <ThanksNote />
            <PersonsList />
        </div>
    </>
    )
}

export default SpecialThanks;

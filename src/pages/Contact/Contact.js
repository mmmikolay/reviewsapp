import React from 'react'

//STYLES
import './contact.css';

import  ContactInfo from '../../components/Contact/ContactMe';
import  MapSketch from '../../components/Contact/ContactMap';

const Contact = () => {
    return (
    <>
        <div className="contact-screen-container pc">
            <ContactInfo />
            <MapSketch />
        </div>
    </>
    )
}

export default Contact;

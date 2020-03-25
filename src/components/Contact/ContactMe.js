import React from 'react';

//STYLES
import './contactme.css';

const ContactMe = () => {
    return (
        <div className="contact-container">
            <div className="nav-background"></div>
            <h2>Contact Me</h2>
            <ul className="contact-list">
                <li className = "contact-list--list-item">
                    <h4><strong>Address</strong></h4>
                    <p style={{padding: 0}}>
                        <a href="https://goo.gl/maps/7YFSZtokUgeySYSE8" target="blank">Altınköy 1, B-2 22</a>                            
                    </p>
                    <p style={{padding: 0}}>
                        <a href="https://goo.gl/maps/7YFSZtokUgeySYSE8" target="blank">Üsküdar, İstanbul</a>
                    </p>
                </li>
                <li className = "contact-list--list-item">
                    <h4><strong>Contact me</strong></h4>
                    <p style={{padding: 0}}>
                        email:
                        <a href="mailto:tuncerilk@gmail.com">tuncer.ilk@gmail.com</a>                            
                    </p>
                    <p style={{padding: 0}}>
                        phone:
                        <a href="tel:905379647363">+90 537 964 7363</a>
                    </p>
                </li>
            </ul>
        </div>
        
    )
}

export default ContactMe;
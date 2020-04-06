import React from "react";

//STYLES
import "./contactme.css";

const ContactMe = () => {
  return (
    <div className="contact-container">
      <div className="nav-background"></div>
      <h2>Contact Me</h2>
      <ul className="contact-list">
        <li className="contact-list--list-item">
          <h4>
            <strong>Address</strong>
          </h4>
          <p style={{ padding: 0 }}>
            <a href="https://goo.gl/maps/oR8ppDjpFNLuoLT38" target="blank">
              Cankurtaran, 34122
            </a>
          </p>
          <p style={{ padding: 0 }}>
            <a href="https://goo.gl/maps/oR8ppDjpFNLuoLT38" target="blank">
              Fatih, İstanbul
            </a>
          </p>
        </li>
        <li className="contact-list--list-item">
          <h4>
            <strong>Contact me</strong>
          </h4>
          <p style={{ padding: 0 }}>
            email:
            <a href="mailto:thereviewsapp@gmail.com">thereviewsapp@gmail.com</a>
          </p>
          <p style={{ padding: 0 }}>
            phone:
            <a href="tel:905575655454">+90 557 565 5454</a>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ContactMe;

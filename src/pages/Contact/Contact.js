import React from "react";
import NavBar from "../../components/NavBar/NavBar";

//STYLES
import "./contact.css";

import ContactInfo from "../../components/Contact/ContactMe";
import MapSketch from "../../components/Contact/ContactMap";

const Contact = () => {
  return (
    <>
      <div className="contact-screen-container pc">
        <NavBar />
        <ContactInfo />
        <MapSketch />
      </div>
    </>
  );
};

export default Contact;

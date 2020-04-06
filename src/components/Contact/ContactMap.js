import React from "react";

//STYLES
import "./contactmap.css";

import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const ContactMap = ({ google }) => {
  const pos = {
    lat: 41.013577,
    lng: 28.981228,
  };
  return (
    <>
      <div className="map-container">
        <div className="nav-background"></div>
        <div className="map-box">
          <Map
            google={google}
            initialCenter={{
              lat: 41.013577,
              lng: 28.981228,
            }}
            disableDefaultUI="false"
            zoom={18}
          >
            <Marker position={pos} />
          </Map>
        </div>
        <p className="parag">
          Well, I don't actually live in the middle of the Gülhane Park. I just
          wanted to be able to put some address and a map in this page, but I
          also wanted to not be an exhibitionist who puts his private phone
          number and home address in public places. Yes, phone info is also
          fake, but the mail is a real one.
        </p>
      </div>
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(ContactMap);

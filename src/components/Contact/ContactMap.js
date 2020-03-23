import React from 'react';

//STYLES
import './contactmap.css';

import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';


const ContactMap = ({ google }) => {
    const pos = {
        lat: 41.04208, 
        lng: 29.07840
    }

    return (
    <>
    <div className="map-container">
    <div className="nav-background"></div>
    <div className="map-box">
        <Map
            google={google}
            initialCenter={{
            lat: 41.0425,
            lng: 29.0786
            }}
            disableDefaultUI="false"
            zoom={18}
            >
            <Marker position={pos} />
        </Map>
    </div>
    <p className="parag">
            This is my address. Also my home. It's a relatively tranquil site, that is, in İstanbul's standards of course.
    </p>
    </div>

    </>
    );
};

export default GoogleApiWrapper(({
    apiKey: (process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
}))(ContactMap);
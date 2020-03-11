import React from 'react';

//STYLES
import './contactmap.css';

import MapImage from './Map.png';
import  GMapsIcon  from './GMapsIcon';

import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';


const ContactMap = ({ google }) => {
    const pos = {
        lat: 41.04208, 
        lng: 29.07840
    }

    return (
    <>
    <div className="map-box-container">
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

        
        {/* <div className="map-container">
            <img src={MapImage} alt="My Location"/>
            <p>This is where I live. At first, I considered placing a real map view here, but styling turned out to be a hell of an ordeal. So, you have to do with a plain image that I got from Google Maps.</p>
        </div>  */}
    </>
    );
};

// export default ContactMap;
export default GoogleApiWrapper(({
    apiKey: ("AIzaSyBosZzGGGXj2iEk_WPRmLs7zFPyfHhyQZA")
}))(ContactMap);

// AIzaSyBosZzGGGXj2iEk_WPRmLs7zFPyfHhyQZA
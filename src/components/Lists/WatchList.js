import React from 'react'
import MoviesList from './MoviesList';
import NavBar from '../NavBar/NavBar';

//STYLES
import './list.css';

const WatchList = () => {
    return (
    <>
    <div style={{background:"#fafafa"}}><NavBar /></div>
    <div className="list-container">
        <h1><small>MOVIES I HAVE</small> <br/>KNOWN AND LIKED</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at neque euismod, porttitor ligula sed, dignissim eros. Morbi ullamcorper ultrices nibh, in consectetur diam varius nec. Nam fermentum dui sit amet sapien pulvinar, vel auctor nunc ultrices. </p>
    </div>
    <MoviesList itemType="movie"/>
    </>
    )
}

export default WatchList;
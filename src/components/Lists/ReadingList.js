import React from 'react'
import BookList from './BookList';
import NavBar from '../NavBar/NavBar';

//STYLES
import './list.css';

const ReadingList = () => {
    return (
        <> 
            <div className="list-container">
            <NavBar />
                <h1><small>BOOKS I HAVE</small> <br/>KNOWN AND LIKED</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at neque euismod, porttitor ligula sed, dignissim eros. Morbi ullamcorper ultrices nibh, in consectetur diam varius nec. Nam fermentum dui sit amet sapien pulvinar, vel auctor nunc ultrices. </p>
            </div>
            <BookList itemType ="book"/>
        </>
    )
}

export default ReadingList;

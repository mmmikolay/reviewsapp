import React from 'react'
import { HomeButtonDark } from '../../components/Buttons/HomeButton';

//STYLES
import './details.css';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import {
    GET_BOOK,
    GET_BOOKS
} from '../../queries/queries';

// ROUTER
import { useHistory } from 'react-router-dom';

const BookDetails = () => {

    let history = useHistory();

    let [prevbook, currbook, nextbook] = [null, null, null];
    let bookCover;
    let bookReview;
    let bookHeader;
    let detailsPhoto;


    let authorPic;
    let authorBio;


    let prevBookCover;
    let nextBookCover;
    let nextBookId;
    let prevBookId;



    const { bookid } = useParams();
    const { loading, error, data } = useQuery(GET_BOOKS);

    const handleClick = id => {
        if(id !== undefined) {
            history.push(`/book/details/${id}`);
        } else {
            history.push("/")
        }
    }


    if(!loading && data !== undefined){
        let length = data.books.length;

        for (let i=0;i<length;i++) {
            if (data.books[i].id === bookid) {
                // Find the current book.
                currbook = data.books[i];

                bookCover = currbook.cover;
                bookReview = currbook.review;
                authorPic = currbook.author.photo;
                authorBio = currbook.author.bio;
                if(currbook.header && currbook.detailsPhoto){
                    bookHeader = currbook.header;
                    detailsPhoto = currbook.detailsPhoto;
                }

                // Handle the previous book.
                if (i !== 0){
                    prevbook = data.books[i - 1];                 
                } else {
                    prevbook = data.books[length - 1];
                }
                // Handle the next book.
                if( i !== length-1) {
                    nextbook = data.books[i+1];
                } else {
                    nextbook = data.books[0];
                }
            }
        }
    }

    if (prevbook !== null) {
        prevBookCover = prevbook.cover;
        prevBookId = prevbook.id;
    }
    if (nextbook !== null) {
        nextBookCover = nextbook.cover;
        nextBookId = nextbook.id;
    }

    return (
        <div className = "details-container">
            <HomeButtonDark/>
            <div className = "review-heading">
                <h2>{bookHeader}</h2>
            </div>
                <div className = "creator-info">
                    <img className = "creator-portrait" src={authorPic} alt="Creator's Portrait" />
                    <p>{authorBio}</p>
                </div>
            <div className="info-container">
                <div className = "info">
                    <div className = "info--cover">
                            <img  className = "info--cover" src= {detailsPhoto} alt= "Cover Photo"/>
                        </div>
                        <p>{bookReview} </p>

                    <div className ="adjacent-items">
                        <div className= "box prev hover-anim" onClick={ event => handleClick(prevBookId)}>
                            <img className = "box-image" src={prevBookCover} />
                        </div>
                        <div className= "box back hover-anim"onClick = {event => handleClick()}>
                            <img className = "box-image" src={bookCover}/>
                        </div>
                        <div className= "box next hover-anim" onClick = {event => handleClick(nextBookId)}>
                            <img className="box-image" src={nextBookCover} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BookDetails;
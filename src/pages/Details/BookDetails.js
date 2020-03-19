import React from 'react'
import { HomeButtonDark } from '../../components/Buttons/HomeButton';

//STYLES
import './details.css';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import {
    GET_BOOKS,
} from '../../queries/queries';

// ROUTER
import { useHistory } from 'react-router-dom';

const BookDetails = () => {

    let history = useHistory();

    let [previtem, curritem, nextitem] = [null, null, null];
    let itemCover;
    let itemReview;
    let itemHeader;
    let detailsPhoto;


    let creatorPic;
    let creatorBio;


    let prevItemCover;
    let nextItemCover;
    let nextItemId;
    let prevItemId;

    const { bookid } = useParams();
    const { item } = useParams();
    const { loading, error, data } = useQuery(GET_BOOKS);

    const handleClick = id => {
        if(id !== undefined) {
            history.push(`/${item}/details/${id}`);
        } else {
            history.push("/")
        }
    }


    if(!loading && data !== undefined ){
        let length = data.books.length;
        console.log("aaa");

        for (let i=0;i<length;i++) {
            if (data.books[i]._id === bookid) {
                // Find the current item.
                curritem = data.books[i];

                itemCover = curritem.cover;
                itemReview = curritem.review;
                creatorPic = curritem.creator.photo;
                creatorBio = curritem.creator.bio;
                if(curritem.header && curritem.detailsPhoto){
                    itemHeader = curritem.header;
                    detailsPhoto = curritem.detailsPhoto;
                }

                // Handle the previous item.
                if (i !== 0){
                    previtem = data.books[i - 1];                 
                } else {
                    previtem = data.books[length - 1];
                }
                // Handle the next item.
                if( i !== length-1) {
                    nextitem = data.books[i+1];
                } else {
                    nextitem = data.books[0];
                }
            }
        }
    }

    if (previtem !== null) {
        prevItemCover = previtem.cover;
        prevItemId = previtem._id;
    }
    if (nextitem !== null) {
        nextItemCover = nextitem.cover;
        nextItemId = nextitem._id;
    }

    return (
        <div className = "details-container">
            <HomeButtonDark/>
            <div className = "review-heading">
                <h2>{itemHeader}</h2>
            </div>
                <div className = "creator-info">
                    <img className = "creator-portrait" src={creatorPic} alt="Creator's Portrait" />
                    <p>{creatorBio}</p>
                </div>
            <div className="info-container">
                <div className = "info">
                    <div className = "info--cover">
                            <img  className = "info--cover" src= {detailsPhoto} alt= "Cover Photo"/>
                        </div>
                        <p>{itemReview} </p>

                    <div className ="adjacent-items">
                        <div className= "box prev hover-anim" onClick={ event => handleClick(prevItemId)}>
                            <img className = "box-image" src={prevItemCover} />
                        </div>
                        <div className= "box back hover-anim"onClick = {event => handleClick()}>
                            <img className = "box-image" src={itemCover}/>
                        </div>
                        <div className= "box next hover-anim" onClick = {event => handleClick(nextItemId)}>
                            <img className="box-image" src={nextItemCover} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BookDetails;
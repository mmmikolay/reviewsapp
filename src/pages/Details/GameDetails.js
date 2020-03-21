import React from 'react'
import { HomeButtonDark } from '../../components/Buttons/HomeButton';


//STYLES
import './details.css';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import {
    GET_GAMES
} from '../../queries/queries';

// ROUTER
import { useHistory } from 'react-router-dom';

const GameDetails = () => {

    let history = useHistory();

    let [prevgame, currgame, nextgame] = [null, null, null];
    let gameCover;
    let gameReview;
    let gameHeader;
    let detailsPhoto;


    let studioPic;
    let studioBio;


    let prevGameCover;
    let nextGameCover;
    let nextGameId;
    let prevGameId;



    const { gameid } = useParams();
    const { loading, error, data } = useQuery(GET_GAMES);
    if(error){
        throw error;
    }

    const handleClick = id => {
        if(id !== undefined) {
            history.push(`/game/details/${id}`);
        } else {
            history.push("/")
        }
    }


    if(!loading && data !== undefined){
        let length = data.games.length;

        for (let i=0;i<length;i++) {
            if (data.games[i].id === gameid) {
                // Find the current game.
                currgame = data.games[i];

                gameCover = currgame.cover;
                gameReview = currgame.review;
                studioPic = currgame.studio.photo;
                studioBio = currgame.studio.bio;
                if(currgame.header && currgame.detailsPhoto){
                    gameHeader = currgame.header;
                    detailsPhoto = currgame.detailsPhoto;
                }

                // Handle the previous game.
                if (i !== 0){
                    prevgame = data.games[i - 1];                 
                } else {
                    prevgame = data.games[length - 1];
                }
                // Handle the next game.
                if( i !== length-1) {
                    nextgame = data.games[i+1];
                } else {
                    nextgame = data.games[0];
                }
            }
        }
    }

    if (prevgame !== null) {
        prevGameCover = prevgame.cover;
        prevGameId = prevgame.id;
    }
    if (nextgame !== null) {
        nextGameCover = nextgame.cover;
        nextGameId = nextgame.id;
    }

    return (
        <div className = "details-container">
            <HomeButtonDark />
            <div className = "review-heading">
                <h2>{gameHeader}</h2>
            </div>
                <div className = "creator-info">
                    <img className = "creator-portrait" src={studioPic} alt="Studio's Portrait" />
                    <p>{studioBio}</p>
                </div>
            <div className="info-container">
                <div className = "info">
                    <div className = "info--cover">
                            <img  className = "info--cover" src= {detailsPhoto} alt= "Cover"/>
                        </div>
                        <p>{gameReview} </p>

                    <div className ="adjacent-items">
                        <div className= "box prev hover-anim" onClick={ event => handleClick(prevGameId)}>
                            <img src={prevGameCover} alt="Prev"/>
                        </div>
                        <div className= "box back hover-anim"onClick = {event => handleClick()}>
                            <img src={gameCover} alt="Main Menu"/>
                        </div>
                        <div className= "box next hover-anim" onClick = {event => handleClick(nextGameId)}>
                            <img src={nextGameCover} alt="Next"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default GameDetails;
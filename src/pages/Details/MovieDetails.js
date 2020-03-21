import React from 'react'
import { HomeButtonDark } from '../../components/Buttons/HomeButton';


//STYLES
import './details.css';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import {
    GET_MOVIES
} from '../../queries/queries';

// ROUTER
import { useHistory } from 'react-router-dom';

const MovieDetails = () => {

    let history = useHistory();

    let [prevmovie, currmovie, nextmovie] = [null, null, null];
    let movieCover;
    let movieReview;
    let movieHeader;
    let detailsPhoto;


    let directorPic;
    let directorBio;


    let prevMovieCover;
    let nextMovieCover;
    let nextMovieId;
    let prevMovieId;



    const { movieid } = useParams();
    const { loading, error, data } = useQuery(GET_MOVIES);
    if(error){
        throw error;
    }

    const handleClick = id => {
        if(id !== undefined) {
            history.push(`/movie/details/${id}`);
        } else {
            history.push("/")
        }
    }


    if(!loading && data !== undefined){
        let length = data.movies.length;

        for (let i=0;i<length;i++) {
            if (data.movies[i].id === movieid) {
                // Find the current movie.
                currmovie = data.movies[i];

                movieCover = currmovie.cover;
                movieReview = currmovie.review;
                directorPic = currmovie.director.photo;
                directorBio = currmovie.director.bio;
                if(currmovie.header && currmovie.detailsPhoto){
                    movieHeader = currmovie.header;
                    detailsPhoto = currmovie.detailsPhoto;
                }

                // Handle the previous movie.
                if (i !== 0){
                    prevmovie = data.movies[i - 1];                 
                } else {
                    prevmovie = data.movies[length - 1];
                }
                // Handle the next movie.
                if( i !== length-1) {
                    nextmovie = data.movies[i+1];
                } else {
                    nextmovie = data.movies[0];
                }
            }
        }
    }

    if (prevmovie !== null) {
        prevMovieCover = prevmovie.cover;
        prevMovieId = prevmovie.id;
    }
    if (nextmovie !== null) {
        nextMovieCover = nextmovie.cover;
        nextMovieId = nextmovie.id;
    }

    return (
        <div className = "details-container">
            <HomeButtonDark />
            <div className = "review-heading">
                <h2>{movieHeader}</h2>
            </div>
                <div className = "creator-info">
                    <img className = "creator-portrait" src={directorPic} alt="Creator's Portrait" />
                    <p>{directorBio}</p>
                </div>
            <div className="info-container">
                <div className = "info">
                    <div className = "info--cover">
                            <img  className = "info--cover" src= {detailsPhoto} alt= "Cover"/>
                        </div>
                        <p>{movieReview} </p>

                    <div className ="adjacent-items">
                        <div className= "box prev hover-anim" onClick={event => handleClick(prevMovieId)}>
                            <img src={prevMovieCover} alt="Previous"/>
                        </div>
                        <div className= "box back hover-anim"onClick = {event => handleClick()}>
                            <img src={movieCover} alt="Main Menu"/>
                        </div>
                        <div className= "box next hover-anim" onClick = {event => handleClick(nextMovieId)}>
                            <img src={nextMovieCover} alt="Main Menu" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MovieDetails;
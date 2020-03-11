import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_MOVIES } from '../../queries/queries';
import ScrollContainer from 'react-indiana-drag-scroll';

// ROUTER
import { useHistory } from 'react-router-dom';


const MoviesList = () => {
    let history = useHistory();
    const { loading, error, data } = useQuery(GET_MOVIES);

    const handleClick = movie => {
        history.push(`movie/details/${movie.id}`);
    }


    const displayMovies = () => {
        if(loading || data === undefined){
            return(<div>Loading movies...</div>);
        } else {
            return data.movies.map(movie => {
                return (<div key={movie.id} onClick={event => handleClick(movie)}><img src= {movie.cover} alt={movie.name}/></div>);
            });
        }
    }

    return (
        <>
        <div className="scroll-list-container">
        <ScrollContainer className="scroll-list" vertical={false}>
                {displayMovies()}
        </ScrollContainer>  
        </div>      
        </>
    )
}

export default MoviesList;

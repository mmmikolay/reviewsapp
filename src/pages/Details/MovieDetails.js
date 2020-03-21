import React from 'react'

import {
    GET_MOVIES
} from '../../queries/queries';
import { useQuery } from '@apollo/react-hooks';
import Details from '../../components/Details/Details';

const MovieDetails = () => {

    const { loading, error, data } = useQuery(GET_MOVIES);
    if(error){
        throw new Error("Data couldn't be retrieved.");
    }

    const showDetails = () => {
        if (!loading && data !== undefined ){
            return (<Details itemData = {data.movies} />);
        } else {
            return (<h1>Loading...</h1>);
        }
    }
    
    return (
        <>
        {showDetails()}
        </>
    )
}

export default MovieDetails;
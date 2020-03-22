import React from 'react'

import {
    GET_GAMES
} from '../../queries/queries';
import { useQuery } from '@apollo/react-hooks';
import Details from '../../components/Details/Details';

const GameDetails = () => {

    const { loading, error, data } = useQuery(GET_GAMES);
    if(error){
        throw new Error("Data couldn't be retrieved.");
    }

    const showDetails = () => {
        if (!loading && data !== undefined ){
            return (<Details itemData = {data.games} />);
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

export default GameDetails;
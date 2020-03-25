import React from 'react'

import {
    GET_GAMES
} from '../../queries/queries';
import { useQuery } from '@apollo/react-hooks';
import Details from '../../components/Details/Details';
import NavBar from '../../components/NavBar';

const GameDetails = () => {

    const { loading, error, data } = useQuery(GET_GAMES);
    if(error){
        throw new Error("Data couldn't be retrieved.");
    }

    const showDetails = () => {
        if (!loading && data !== undefined ){
            return (<Details itemData = {data.games} item="game" />);
        } else {
            return (<h1>Loading...</h1>);
        }
    }

    return (
        <>
        <NavBar />
        {showDetails()}
        </>
    )
}

export default GameDetails;
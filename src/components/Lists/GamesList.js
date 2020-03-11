import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_GAMES } from '../../queries/queries';
import ScrollContainer from 'react-indiana-drag-scroll';

// ROUTER
import { useHistory } from 'react-router-dom';


const GamesList = () => {
    let history = useHistory();
    const { loading, error, data } = useQuery(GET_GAMES);

    const handleClick = game => {
        history.push(`/game/details/${game.id}`);
    }


    const displayGames = () => {
        if(loading || data === undefined){
            return(<div>Loading games...</div>);
        } else {
            return data.games.map(game => {
                return (<div key={game.id} onClick={event => handleClick(game)}><img src= {game.cover} alt={game.name}/></div>);
            });
        }
    }

    return (
        <>
        <div className="scroll-list-container">
            <ScrollContainer className="scroll-list" vertical={false}>
                    {displayGames()}
            </ScrollContainer>             
        </div>     
        </>
    )
}

export default GamesList;

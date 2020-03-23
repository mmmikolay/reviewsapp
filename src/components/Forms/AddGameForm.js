import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { ADD_GAME } from '../../queries/mutations';
import { GET_STUDIOS, GET_GAMES } from '../../queries/queries';

import { useHistory } from 'react-router-dom';

//STYLES
import './forms.css';


const AddGameForm = () => {

    let history = useHistory()

    const [gameInstance, setGameInstance] = useState({
        name: "",
        cover: "",
        review:"",
        header:"",
        detailsPhoto:"",
        creatorId:"",
    })

    // GQL Queries
    const { loading, error, data } = useQuery(GET_STUDIOS);
    if(error){
        throw error;
    }
    const  [addGameMutation]  = useMutation(ADD_GAME); 

    const displayStudios =() => {
        if(loading){
            return(<option disabled>Loading Studios...</option>)
        } else {
            return  data.studios.map(studio => {
                    return(<option key={studio._id} value={studio._id}>{studio.name}</option>);
                    })

            
        }
    }

    const submitForm = event => {
        event.preventDefault();
        addGameMutation({
            variables:{
                name: gameInstance.name,
                cover: gameInstance.cover,
                review: gameInstance.review,
                header: gameInstance.header,
                detailsPhoto: gameInstance.detailsPhoto,
                creatorId: gameInstance.creatorId,
            },
            refetchQueries:[{
                query: GET_GAMES,
            }]
        });
    }

    const handleClick =  event => {
        event.preventDefault();
        history.push("/add_studio");
    }

    return (
        <>
        <div className="add-item-container">
            <form className="add-item" >

                <div className="field">
                    <label>Game name:</label>
                    <input type="text" onChange={event => setGameInstance({
                        ...gameInstance, 
                        name: event.target.value,
                    })}/>
                </div>

                <div className="field">
                    <label>Link to the cover photo:</label>
                    <input type="text" onChange={event => setGameInstance({
                        ...gameInstance, 
                        cover: event.target.value,
                    })}/>
                </div>

                <div className="field">
                    <label>Review:</label>
                    <input type="text" onChange={event => setGameInstance({
                        ...gameInstance, 
                        review: event.target.value,
                    })}/>
                </div>
                
                <div className="field">
                    <label>Header:</label>
                    <input type="text" onChange={event => setGameInstance({
                        ...gameInstance, 
                        header: event.target.value,
                    })}/>
                </div>

                <div className="field">
                    <label>DetailsPhoto:</label>
                    <input type="text" onChange={event => setGameInstance({
                        ...gameInstance, 
                        detailsPhoto: event.target.value,
                    })}/>
                </div>

                <div className="field-select">
                    <label>Studio:</label>
                    <select onChange={event => setGameInstance({
                        ...gameInstance, 
                        creatorId: event.target.value,
                    })}>
                        <option>Select studio</option>
                        {displayStudios()}
                    </select>
                    <button className= "new-creator"onClick={handleClick}>+</button>
                </div>

                <button className= "add-item-button" onClick={submitForm}>+</button>
            </form>
        </div>
        </>
    )
}

export default AddGameForm;
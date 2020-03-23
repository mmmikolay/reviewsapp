import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { ADD_MOVIE } from '../../queries/mutations';
import { GET_DIRECTORS, GET_MOVIES } from '../../queries/queries';

import { useHistory } from 'react-router-dom';

//STYLES
import './forms.css';


const AddMovie = () => {

    let history = useHistory()

    const [movieInstance, setMovieInstance] = useState({
        name: "",
        cover: "",
        review:"",
        header:"",
        detailsPhoto:"",
        extraPhoto:"",
        creatorId:"",
    })

    // GQL Queries
    const { loading, error, data } = useQuery(GET_DIRECTORS);
    if(error){
        throw error;
    }
    const  [addMovieMutation]  = useMutation(ADD_MOVIE); 

    const displayDirectors =() => {
        if(loading){
            return(<option disabled>Loading Directors...</option>)
        } else {
            return  data.directors.map(director => {
                    return(<option key={director._id} value={director._id}>{director.name}</option>);
                    })

            
        }
    }

    const submitForm = event => {
        event.preventDefault();
        addMovieMutation({
            variables:{
                name: movieInstance.name,
                cover: movieInstance.cover,
                review: movieInstance.review,
                header: movieInstance.header,
                detailsPhoto: movieInstance.detailsPhoto,
                extraPhoto: movieInstance.extraPhoto,
                creatorId: movieInstance.creatorId,
            },
            refetchQueries:[{
                query: GET_MOVIES,
            }]
        });
    }

    const handleClick =  event => {
        event.preventDefault();
        history.push("/add_director");
    }

    return (
        <>
        <div className="add-item-container">
            <form className="add-item" >

                <div className="field">
                    <label>Movie name:</label>
                    <input type="text" onChange={event => setMovieInstance({
                        ...movieInstance, 
                        name: event.target.value,
                    })}/>
                </div>

                <div className="field">
                    <label>Link to the cover photo:</label>
                    <input type="text" onChange={event => setMovieInstance({
                        ...movieInstance, 
                        cover: event.target.value,
                    })}/>
                </div>

                <div className="field">
                    <label>Review:</label>
                    <input type="text" onChange={event => setMovieInstance({
                        ...movieInstance, 
                        review: event.target.value,
                    })}/>
                </div>
                
                <div className="field">
                    <label>Header:</label>
                    <input type="text" onChange={event => setMovieInstance({
                        ...movieInstance, 
                        header: event.target.value,
                    })}/>
                </div>

                <div className="field">
                    <label>DetailsPhoto:</label>
                    <input type="text" onChange={event => setMovieInstance({
                        ...movieInstance, 
                        detailsPhoto: event.target.value,
                    })}/>
                </div>

                <div className="field-select">
                    <label>Director:</label>
                    <select onChange={event => setMovieInstance({
                        ...movieInstance, 
                        creatorId: event.target.value,
                    })}>
                        <option>Select director</option>
                        {displayDirectors()}
                    </select>
                    <button className= "new-creator"onClick={handleClick}>+</button>
                </div>

                <button className= "add-item-button" onClick={submitForm}>+</button>
            </form>
        </div>
        </>
    )
}

export default AddMovie;
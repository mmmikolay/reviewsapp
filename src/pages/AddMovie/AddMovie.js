import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_DIRECTORS, ADD_MOVIE, GET_MOVIES } from '../../queries/queries';

import { useHistory } from 'react-router-dom';

//STYLES
import './addmovie.css';


const AddMovie = () => {

    let history = useHistory()

    const [movieInstance, setMovieInstance] = useState({
        name: "",
        cover: "",
        review:"",
        header:"",
        detailsPhoto:"",
        extraPhoto:"",
        directorId:"",
    })

    // GQL Queries
    const { loading, error, data } = useQuery(GET_DIRECTORS); 
    const  [addMovieMutation, { mutationData }]  = useMutation(ADD_MOVIE); 

    const displayDirectors =() => {
        if(loading){
            return(<option disabled>Loading Directors...</option>)
        } else {
            return  data.directors.map(director => {
                    return(<option key={director.id} value={director.id}>{director.name}</option>);
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
                directorId: movieInstance.directorId,
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
        <div className="add-book-container">
            <form className="add-book" >

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
                <div className="field">
                    <label>ExtraPhoto(optional):</label>
                    <input type="text" onChange={event => setMovieInstance({
                        ...movieInstance, 
                        extraPhoto: event.target.value,
                    })}/>
                </div>

                <div className="field-select">
                    <label>Director:</label>
                    <select onChange={event => setMovieInstance({
                        ...movieInstance, 
                        directorId: event.target.value,
                    })}>
                        <option>Select director</option>
                        {displayDirectors()}
                    </select>
                    <button className= "new-author"onClick={handleClick}>+</button>
                </div>

                <button className= "add-book-button" onClick={submitForm}>+</button>
            </form>
        </div>
        </>
    )
}

export default AddMovie;
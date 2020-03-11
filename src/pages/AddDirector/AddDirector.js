import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { ADD_DIRECTOR, GET_DIRECTORS } from '../../queries/queries';

//STYLES
import './adddirector.css';

import { useHistory } from 'react-router-dom';




const AddDirector = () => {

    let history = useHistory();

    const [directorInstance, setDirectorInstance] = useState({
        name: "",
        bio: "",
        photo:"",

    })

    // GQL Queries
    const { loading, error, data } = useQuery(GET_DIRECTORS); 
    const  [addDirectorMutation, { mutationData }]  = useMutation(ADD_DIRECTOR); 



    // Handle Query
    const submitForm = event => {
        event.preventDefault();
        addDirectorMutation({
            variables:{
                name: directorInstance.name,
                bio: directorInstance.bio,
                photo: directorInstance.photo,
            },
            refetchQueries:[{
                query: GET_DIRECTORS,
            }]
        });
        history.goBack();
    }

    return (
        <>
        <div className="add-author-container">
            <form id="add-author">

                <div className="field">
                    <label>Name of the Director:</label>
                    <input type="text" onChange={event => setDirectorInstance({
                        ...directorInstance, 
                        name: event.target.value,
                    })}/>
                </div>

                <div className="field">
                    <label>Director bio:</label>
                    <input type="text" onChange={event => setDirectorInstance({
                        ...directorInstance, 
                        bio: event.target.value,
                    })}/>
                </div>

                <div className="field">
                    <label>Link to photo:</label>
                    <input type="text" onChange={event => setDirectorInstance({
                        ...directorInstance, 
                        photo: event.target.value,
                    })}/>
                </div>
            </form>
            <button className="add-author" onClick={submitForm}>+</button>
        </div>
   


        </>
    )
}

export default AddDirector;
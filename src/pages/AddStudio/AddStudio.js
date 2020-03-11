import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { ADD_STUDIO, GET_STUDIOS } from '../../queries/queries';

//STYLES
import './addstudio.css';

import { useHistory } from 'react-router-dom';




const AddStudio = () => {

    let history = useHistory();

    const [studioInstance, setStudioInstance] = useState({
        name: "",
        bio: "",
        photo:"",

    })

    // GQL Queries
    const { loading, error, data } = useQuery(GET_STUDIOS); 
    const  [addStudioMutation, { mutationData }]  = useMutation(ADD_STUDIO); 



    // Handle Query
    const submitForm = event => {
        event.preventDefault();
        addStudioMutation({
            variables:{
                name: studioInstance.name,
                bio: studioInstance.bio,
                photo: studioInstance.photo,
            },
            refetchQueries:[{
                query: GET_STUDIOS,
            }]
        });
        history.goBack();
    }

    return (
        <>
        <div className="add-author-container">
            <form id="add-author">

                <div className="field">
                    <label>Name of the Studio:</label>
                    <input type="text" onChange={event => setStudioInstance({
                        ...studioInstance, 
                        name: event.target.value,
                    })}/>
                </div>

                <div className="field">
                    <label>Studio bio:</label>
                    <input type="text" onChange={event => setStudioInstance({
                        ...studioInstance, 
                        bio: event.target.value,
                    })}/>
                </div>

                <div className="field">
                    <label>Link to photo:</label>
                    <input type="text" onChange={event => setStudioInstance({
                        ...studioInstance, 
                        photo: event.target.value,
                    })}/>
                </div>
            </form>
            <button className="add-author" onClick={submitForm}>+</button>
        </div>
   


        </>
    )
}

export default AddStudio;
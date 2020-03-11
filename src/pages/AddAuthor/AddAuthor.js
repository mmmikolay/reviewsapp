import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { ADD_AUTHOR, GET_AUTHORS } from '../../queries/queries';

//STYLES
import './addauthor.css';

import { useHistory } from 'react-router-dom';




const AddAuthor = () => {

    let history = useHistory();

    const [authorInstance, setAuthorInstance] = useState({
        name: "",
        bio: "",
        photo:"",

    })

    // GQL Queries
    const { loading, error, data } = useQuery(GET_AUTHORS); 
    const  [addAuthorMutation, { mutationData }]  = useMutation(ADD_AUTHOR); 



    // Handle Query
    const submitForm = event => {
        event.preventDefault();
        addAuthorMutation({
            variables:{
                name: authorInstance.name,
                bio: authorInstance.bio,
                photo: authorInstance.photo,
            },
            refetchQueries:[{
                query: GET_AUTHORS,
            }]
        });
        history.goBack();
    }

    return (
        <>
        <div className="add-author-container">
            <form id="add-author">

                <div className="field">
                    <label>Name of the Author:</label>
                    <input type="text" onChange={event => setAuthorInstance({
                        ...authorInstance, 
                        name: event.target.value,
                    })}/>
                </div>

                <div className="field">
                    <label>Author bio:</label>
                    <input type="text" onChange={event => setAuthorInstance({
                        ...authorInstance, 
                        bio: event.target.value,
                    })}/>
                </div>

                <div className="field">
                    <label>Link to photo:</label>
                    <input type="text" onChange={event => setAuthorInstance({
                        ...authorInstance, 
                        photo: event.target.value,
                    })}/>
                </div>
            </form>
            <button className="add-author" onClick={submitForm}>+</button>
        </div>
   


        </>
    )
}

export default AddAuthor;
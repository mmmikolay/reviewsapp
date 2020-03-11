import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_AUTHORS, ADD_BOOK, GET_BOOKS } from '../../queries/queries';

import { useHistory } from 'react-router-dom';

//STYLES
import './addbook.css';


const AddBook = () => {

    let history = useHistory()

    const [bookInstance, setBookInstance] = useState({
        name: "",
        cover: "",
        review:"",
        header:"",
        detailsPhoto:"",
        authorId:"",
    })

    // GQL Queries
    const { loading, error, data } = useQuery(GET_AUTHORS); 
    const  [addBookMutation, { mutationData }]  = useMutation(ADD_BOOK); 

    const displayAuthors =() => {
        if(loading){
            return(<option disabled>Loading Authors...</option>)
        } else {
            return  data.authors.map(author => {
                    return(<option key={author.id} value={author.id}>{author.name}</option>);
                    })

            
        }
    }

    const submitForm = event => {
        event.preventDefault();
        addBookMutation({
            variables:{
                name: bookInstance.name,
                cover: bookInstance.cover,
                review: bookInstance.review,
                header: bookInstance.header,
                detailsPhoto: bookInstance.detailsPhoto,
                authorId: bookInstance.authorId,
            },
            refetchQueries:[{
                query: GET_BOOKS,
            }]
        });
    }

    const handleClick =  event => {
        event.preventDefault();
        history.push("/add_author");
    }

    return (
        <>
        <div className="add-book-container">
            <form className="add-book" >

                <div className="field">
                    <label>Book name:</label>
                    <input type="text" onChange={event => setBookInstance({
                        ...bookInstance, 
                        name: event.target.value,
                    })}/>
                </div>

                <div className="field">
                    <label>Link to the cover photo:</label>
                    <input type="text" onChange={event => setBookInstance({
                        ...bookInstance, 
                        cover: event.target.value,
                    })}/>
                </div>

                <div className="field">
                    <label>Review:</label>
                    <input type="text" onChange={event => setBookInstance({
                        ...bookInstance, 
                        review: event.target.value,
                    })}/>
                </div>
                
                <div className="field">
                    <label>Header:</label>
                    <input type="text" onChange={event => setBookInstance({
                        ...bookInstance, 
                        header: event.target.value,
                    })}/>
                </div>

                <div className="field">
                    <label>DetailsPhoto:</label>
                    <input type="text" onChange={event => setBookInstance({
                        ...bookInstance, 
                        detailsPhoto: event.target.value,
                    })}/>
                </div>

                <div className="field-select">
                    <label>Author:</label>
                    <select onChange={event => setBookInstance({
                        ...bookInstance, 
                        authorId: event.target.value,
                    })}>
                        <option>Select author</option>
                        {displayAuthors()}
                    </select>
                    <button className= "new-author"onClick={handleClick}>+</button>
                </div>

                <button className= "add-book-button" onClick={submitForm}>+</button>
            </form>
        </div>
        </>
    )
}

export default AddBook;
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_BOOKS } from '../../queries/queries';
import ScrollContainer from 'react-indiana-drag-scroll';

// ROUTER
import { useHistory } from 'react-router-dom';


const BookList = () => {
    let history = useHistory();
    const { loading, error, data } = useQuery(GET_BOOKS);

    const handleClick = book => {
        history.push(`book/details/${book.id}`);
    }


    const displayBooks = () => {
        if(loading || data === undefined){
            return(<div>Loading books...</div>);
        } else {
            return data.books.map(book => {
                return (<div key={book.id} onClick={event => handleClick(book)}><img src= {book.cover} alt={book.name}/></div>);
            });
        }
    }

    return (
        <>
        <div className="scroll-list-container">
            <ScrollContainer className="scroll-list" vertical={false}>
                    {displayBooks()}
            </ScrollContainer>              
        </div>    
        </>
    )
}

export default BookList;

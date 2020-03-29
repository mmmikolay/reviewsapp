import React from 'react'
import NavBar from '../../components/NavBar/NavBar'

import {
    GET_BOOKS,
} from '../../queries/queries';
import { useQuery } from '@apollo/react-hooks';
import Details from '../../components/Details/Details';

const BookDetails = () => {

    const { loading, error, data } = useQuery(GET_BOOKS);
    if(error){
        throw new Error("Data couldn't be retrieved.");
    }

    const showDetails = () => {
        if (!loading && data !== undefined ){
            return (<Details itemData = {data.books} item="book" />);
        } else {
            return (<h1>Loading...</h1>);
        }
    }

    return (
        <>
        <div className="nav-background" style={{backgroundColor:"#fafafa"}}>
        </div>
        <NavBar />
        {showDetails()}
        </>
    )
}

export default BookDetails;
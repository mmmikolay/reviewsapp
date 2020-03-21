import React from 'react'

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
            return (<Details itemData = {data.books} />);
        } else {
            return (<h1>Loading...</h1>);
        }
    }

    return (
        <>
        {showDetails()}
        </>
    )
}

export default BookDetails;
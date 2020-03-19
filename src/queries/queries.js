import { gql } from 'apollo-boost';


export const ADD_BOOK =gql`
    mutation($name:String!, $cover:String!,$review:String!,$header:String!, $detailsPhoto:String!,$authorId:ID!){
        addBook(name:$name,cover:$cover,review:$review,header:$header,detailsPhoto:$detailsPhoto,authorId:$authorId){
            name
            _id
        }
    }
`;
export const ADD_AUTHOR =gql`
    mutation($name:String!, $bio:String!,$photo:String!){
        addAuthor(name:$name,bio:$bio,photo:$photo){
            name
            _id
        }
    }
`;

export const ADD_MOVIE =gql`
    mutation($name:String!, $cover:String!,$review:String!,$header:String!, $detailsPhoto:String!,$extraPhoto:String,$directorId:ID!){
        addMovie(name:$name,cover:$cover,review:$review,header:$header,detailsPhoto:$detailsPhoto,extraPhoto:$extraPhoto,directorId:$directorId){
            name
            _id
        }
    }
`;
export const ADD_DIRECTOR =gql`
    mutation($name:String!, $bio:String!,$photo:String!){
        addDirector(name:$name,bio:$bio,photo:$photo){
            name
            _id
        }
    }
`;

export const ADD_GAME =gql`
    mutation($name:String!, $cover:String!,$review:String!,$header:String!, $detailsPhoto:String!,$studioId:ID!){
        addGame(name:$name,cover:$cover,review:$review,header:$header,detailsPhoto:$detailsPhoto,studioId:$studioId){
            name
            _id
        }
    }
`;
export const ADD_STUDIO =gql`
    mutation($name:String!, $bio:String!,$photo:String!){
        addStudio(name:$name,bio:$bio,photo:$photo){
            name
            _id
        }
    }
`;

export const GET_BOOKS = gql`
    {
        books{
            _id
            name
            cover
            review
            header
            detailsPhoto
            creator {
                name
                bio
                photo
            }
        }
    }
`;

export const GET_AUTHORS = gql`
    {
        authors{
            name
            bio
            _id
        }
    }
`;



export const GET_MOVIES = gql`
    {
        movies{
            name
            cover
            review
            header
            detailsPhoto
            _id
            creator {
                name
                bio
                photo
            }
        }
    }
`;

export const GET_DIRECTORS = gql`
    {
        directors{
            name
            bio
            _id
        }
    }
`;


export const GET_GAMES = gql`
    {
       games{
           _id
            name
            cover
            review
            header
            detailsPhoto
            _id
            creator {
                name
                bio
                photo
            }
        }
    }
`;

export const GET_STUDIOS = gql`
    {
        studios{
            name
            bio
            _id
        }
    }
`;

export const LOGIN = gql`
    query login($email:String!, $password:String!){
        login(email:$email,password:$password)
        {
            token
        }
    }
`;
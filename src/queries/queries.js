import { gql } from 'apollo-boost';


export const ADD_BOOK =gql`
    mutation($name:String!, $cover:String!,$review:String!,$header:String!, $detailsPhoto:String!,$authorId:ID!){
        addBook(name:$name,cover:$cover,review:$review,header:$header,detailsPhoto:$detailsPhoto,authorId:$authorId){
            name
            id
        }
    }
`;
export const ADD_AUTHOR =gql`
    mutation($name:String!, $bio:String!,$photo:String!){
        addAuthor(name:$name,bio:$bio,photo:$photo){
            name
            id
        }
    }
`;

export const ADD_MOVIE =gql`
    mutation($name:String!, $cover:String!,$review:String!,$header:String!, $detailsPhoto:String!,$extraPhoto:String,$directorId:ID!){
        addMovie(name:$name,cover:$cover,review:$review,header:$header,detailsPhoto:$detailsPhoto,extraPhoto:$extraPhoto,directorId:$directorId){
            name
            id
        }
    }
`;
export const ADD_DIRECTOR =gql`
    mutation($name:String!, $bio:String!,$photo:String!){
        addDirector(name:$name,bio:$bio,photo:$photo){
            name
            id
        }
    }
`;

export const ADD_GAME =gql`
    mutation($name:String!, $cover:String!,$review:String!,$header:String!, $detailsPhoto:String!,$studioId:ID!){
        addGame(name:$name,cover:$cover,review:$review,header:$header,detailsPhoto:$detailsPhoto,studioId:$studioId){
            name
            id
        }
    }
`;
export const ADD_STUDIO =gql`
    mutation($name:String!, $bio:String!,$photo:String!){
        addStudio(name:$name,bio:$bio,photo:$photo){
            name
            id
        }
    }
`;


export const GET_BOOK = gql`
    query($id:ID){
        book(id:$id){
            id
            name
            cover
            review
            author{
                id
                name
                bio
                photo
                books{
                    name
                    id
                }
            }
        }
    }
`;

export const GET_BOOKS = gql`
    {
        books{
            name
            cover
            review
            header
            detailsPhoto
            id
            author {
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
            id
        }
    }
`;

export const GET_MOVIE = gql`
    query($id:ID){
        movie(id:$id){
            id
            name
            cover
            review
            director{
                id
                name
                bio
                photo
                movies{
                    name
                    id
                }
            }
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
            extraPhoto
            id
            director {
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
            id
        }
    }
`;


export const GET_GAME = gql`
    query($id:ID){
        game(id:$id){
            id
            name
            cover
            review
            studio{
                id
                name
                bio
                photo
                games{
                    name
                    id
                }
            }
        }
    }
`;

export const GET_GAMES = gql`
    {
       games{
            name
            cover
            review
            header
            detailsPhoto
            id
            studio {
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
            id
        }
    }
`;
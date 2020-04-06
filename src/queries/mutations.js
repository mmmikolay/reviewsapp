import { gql } from "apollo-boost";

export const ADD_BOOK = gql`
  mutation(
    $name: String!
    $cover: String!
    $review: String!
    $header: String!
    $detailsPhoto: String!
    $creatorId: ID!
  ) {
    addBook(
      bookInput: {
        name: $name
        cover: $cover
        review: $review
        header: $header
        detailsPhoto: $detailsPhoto
        creatorId: $creatorId
      }
    ) {
      name
      _id
    }
  }
`;
export const ADD_AUTHOR = gql`
  mutation($name: String!, $bio: String!, $photo: String!) {
    addAuthor(authorInput: { name: $name, bio: $bio, photo: $photo }) {
      name
      _id
    }
  }
`;
export const ADD_MOVIE = gql`
  mutation(
    $name: String!
    $cover: String!
    $review: String!
    $header: String!
    $detailsPhoto: String!
    $creatorId: ID!
  ) {
    addMovie(
      movieInput: {
        name: $name
        cover: $cover
        review: $review
        header: $header
        detailsPhoto: $detailsPhoto
        creatorId: $creatorId
      }
    ) {
      name
      _id
    }
  }
`;
export const ADD_DIRECTOR = gql`
  mutation($name: String!, $bio: String!, $photo: String!) {
    addDirector(directorInput: { name: $name, bio: $bio, photo: $photo }) {
      name
      _id
    }
  }
`;
export const ADD_GAME = gql`
  mutation(
    $name: String!
    $cover: String!
    $review: String!
    $header: String!
    $detailsPhoto: String!
    $creatorId: ID!
  ) {
    addGame(
      gameInput: {
        name: $name
        cover: $cover
        review: $review
        header: $header
        detailsPhoto: $detailsPhoto
        creatorId: $creatorId
      }
    ) {
      name
      _id
    }
  }
`;
export const ADD_STUDIO = gql`
  mutation($name: String!, $bio: String!, $photo: String!) {
    addStudio(studioInput: { name: $name, bio: $bio, photo: $photo }) {
      name
      _id
    }
  }
`;
export const LOGIN = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

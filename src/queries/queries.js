import { gql } from "apollo-boost";

export const GET_BOOKS = gql`
  {
    books {
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
    authors {
      name
      bio
      _id
    }
  }
`;
export const GET_MOVIES = gql`
  {
    movies {
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
export const GET_DIRECTORS = gql`
  {
    directors {
      name
      bio
      _id
    }
  }
`;
export const GET_GAMES = gql`
  {
    games {
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
    studios {
      name
      bio
      _id
    }
  }
`;

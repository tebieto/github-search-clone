import { gql } from '@apollo/client';

export const SEARCH_REPOSITORY = gql`
  query Search($query: String!) {
    search(query: $query, type: REPOSITORY, last: 100) {
      nodes {
        ... on Repository {
          id
          name
          languages(first: 1) {
            nodes {
              name
            }
          }
          licenseInfo {
            name
          }
          updatedAt
          stargazerCount
          description
        }
      }
    }
  }
`;

export const SEARCH_USER = gql`
  query Search($query: String!) {
    search(query: $query, type: USER, last: 100) {
      nodes {
        ... on User {
          id
          name
          bio
          email
        }
      }
    }
  }
`;

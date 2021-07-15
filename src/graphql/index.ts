import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { ACCESS_TOKEN_KEY } from '../utils/constants';

const link = createHttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {
    /**
     *  Storing token in localStorage is bad practice
     *  but I to do this to add access_token to authentication flow
     * This could be avoided by storing access tokens as secured enviroinment variable
     * */
    Authorization: `bearer ${localStorage.getItem(ACCESS_TOKEN_KEY)}`,
  },
});
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

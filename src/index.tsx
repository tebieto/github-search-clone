import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import { createTheme, ThemeProvider } from '@material-ui/core';
import colors from './utils/colors';

const link = createHttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {
    /**
     *  Storing token in localStorage is bad practice
     *  but I to do this to add access_token to authentication flow
     * This could be avoided by storing access tokens as secured enviroinment variable
     * */
    Authorization: `bearer ${localStorage.getItem('access_token')}`,
  },
});
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

const customTheme = createTheme({
  palette: {
    primary: {
      main: colors.primaryColor,
    },
    secondary: {
      main: colors.secondaryColor,
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <ThemeProvider theme={customTheme}>
          <App />
        </ThemeProvider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

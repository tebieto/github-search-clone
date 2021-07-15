import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Loader from './components/Loader';
import { ACCESS_TOKEN_KEY } from './utils/constants';
const Login = lazy(() => import('./pages/Login'));
const Search = lazy(() => import('./pages/Search'));
const Result = lazy(() => import('./pages/Result'));
function App(): JSX.Element {
  const isLoggedIn = localStorage.getItem(ACCESS_TOKEN_KEY);
  return (
    <BrowserRouter>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <Route
              path={'/'}
              exact
              render={() =>
                isLoggedIn ? <Redirect to="/search" /> : <Login />
              }
            />
            <Route
              path={'/search'}
              exact
              render={() => (isLoggedIn ? <Search /> : <Redirect to="/" />)}
            />
            <Route
              path={'/search/results'}
              exact
              render={() => (isLoggedIn ? <Result /> : <Redirect to="/" />)}
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Loader from './components/Loader';
import { isLoggedIn } from './utils/auth';
import { PAGES } from './utils/constants';
const Login = lazy(() => import('./pages/Login'));
const Search = lazy(() => import('./pages/Search'));
const Result = lazy(() => import('./pages/Result'));

function App(): JSX.Element {
  const IS_LOGGED_IN = isLoggedIn();
  return (
    <BrowserRouter>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <Route
              path={PAGES.login}
              exact
              render={() =>
                IS_LOGGED_IN ? <Redirect to={PAGES.search} /> : <Login />
              }
            />
            <Route
              path={PAGES.search}
              exact
              render={() =>
                IS_LOGGED_IN ? <Search /> : <Redirect to={PAGES.login} />
              }
            />
            <Route
              path={PAGES.results}
              exact
              render={() =>
                IS_LOGGED_IN ? <Result /> : <Redirect to={PAGES.login} />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

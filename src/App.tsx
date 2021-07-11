import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Loader from './components/Loader';
const Login = lazy(() => import('./pages/Login'));
const Search = lazy(() => import('./pages/Search'));

function App(): JSX.Element {
  return (
    <div>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <Route path={'/'} exact component={Login} />
            <Route path={'/search'} exact component={Search} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Details from './components/content/details/Details';
import ErrorBoundary from './components/error/ErrorBoundary';

const App = () => {
  return (

    <Router>
      <ErrorBoundary>
        <Header />
        <div className="app">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path='/:id/:name/details' component={Details} />
          </Switch>
        </div>
      </ErrorBoundary>
    </Router>
  );
};

export default App;

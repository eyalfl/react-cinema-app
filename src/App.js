import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import store from './redux/store';
import './App.scss';
import Header from './components/header/Header';
import Main from './components/main/Main';
import ErrorPage from './components/error/ErrorPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="app">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;

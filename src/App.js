import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import './App.scss';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Redux initial setup</h1>
      </div>
    </Provider>
  );
};

export default App;

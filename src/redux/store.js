import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const initialState = {};
let middleware = [thunk];
const isDev = true;

middleware = (isDev) ? composeWithDevTools(applyMiddleware(...middleware)) : applyMiddleware(...middleware);

const store = createStore(rootReducer, initialState, middleware);

export default store;

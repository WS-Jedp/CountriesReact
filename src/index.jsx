import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// styles
import './styles/main.css';

import App from './routes/App';

// redux
import { createStore, applyMiddleware,  } from 'redux';
import combineReducer from './reducers/combineReducer';
import ReduxThunk from 'redux-thunk';


const store = createStore(combineReducer, {}, applyMiddleware(ReduxThunk) );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('app'));
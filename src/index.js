import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import App from './App'
import './App.css';
import reportWebVitals from './reportWebVitals';
import {students} from './reducers/students'
import {courses} from './reducers/courses'
import {teachers} from './reducers/teachers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({ students, teachers, courses })

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);

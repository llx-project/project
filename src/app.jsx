import React from 'react';
import ReactDOM from 'react-dom';
import router from './router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
import promiseMiddleware from './common/util/promiseMiddleware';

import './common/asset/index.css';

const store = createStore(reducer, applyMiddleware(
    promiseMiddleware,
))

const app = (
    <Provider store={store}>
        {router()}
    </Provider>
);

ReactDOM.render(app, document.querySelector('#app'))
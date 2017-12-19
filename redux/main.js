import React from 'react';
import ReactDOM from 'react-dom';
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './styles/styles.less';

import App from './app.jsx';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>,
    document.getElementById('app-container')
);
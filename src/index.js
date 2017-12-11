import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import './index.css';
import reducer from './reducers';
import AppStoreCnt from './containers/appStoreCnt/AppStoreCnt';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const history = syncHistoryWithStore(hashHistory, store);


ReactDOM.render(
    <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={AppStoreCnt} />
            </Router> 
    </ Provider>,
    document.getElementById('root')
);


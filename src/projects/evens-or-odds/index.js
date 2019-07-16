import React from "react";
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import App from "./components/App";
import rootReducer from "./reducers/index";
import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk)); //function inside is the reducer

// console.log("init store", store);
// console.log("init store.getState()", store.getState());

store.subscribe(() => console.log("sub: store.getState()", store.getState()));

const EvensOrOdds = () => {
    return (<div><Provider store = {store}><App/></Provider></div>);
}

export default EvensOrOdds;


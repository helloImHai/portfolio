import {combineReducers} from "redux";
import messagesReducer from "./messages";
import userReducer from "./user";
import reactionsReducer from './reactions';

export default combineReducers(
    {
        messages: messagesReducer, 
        user: userReducer,
        reactions: reactionsReducer
    }
);
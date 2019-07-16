import {CHANGE_USERNAME} from "../actions/types";

const DEFAULT_USER = {username: 'anonymous'};

const userReducer = (state = DEFAULT_USER, action) => {
    switch (action.type) {
        case CHANGE_USERNAME: 
            console.log("reducer name", action.username);
            return {...state, username: action.username};
        default:
            return state;
    }
}

export default userReducer;
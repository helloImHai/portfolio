import {CHANGE_USERNAME} from "./types";

export const changeUsername = (name) => {
    return {
        type: CHANGE_USERNAME,
        username: name,
    };
};
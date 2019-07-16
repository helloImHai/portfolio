import {SET_START_GAME, SET_INSTRUCTION_EXPAND} from "../actions/types";

const DEFAULT_SETTINGS = {
    gameStarted: false,
    instructionsExpanded: false,
}

const settingsReducer = (state = DEFAULT_SETTINGS, action) => {
    switch (action.type) {
        case SET_START_GAME:
            return { ...state, gameStarted: action.gameStarted};
        case SET_INSTRUCTION_EXPAND:
            return { ...state, instructionsExpanded: action.instructionsExpanded};
        default:
            return state;
    }
}

export default settingsReducer;
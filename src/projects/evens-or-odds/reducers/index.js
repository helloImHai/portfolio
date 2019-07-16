import {combineReducers} from "redux";
import settingsReducer from "./settings";
import deckReducer from "./deck";
import gameStateReducer from "./gameState";

const rootReducer = combineReducers({
    settings: settingsReducer, 
    deck: deckReducer,
    gameState: gameStateReducer
});

export default rootReducer;
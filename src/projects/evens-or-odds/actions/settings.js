import {SET_START_GAME, SET_INSTRUCTION_EXPAND} from "./types";

export const startGame = () => {
    return {type:SET_START_GAME, gameStarted: true};
}

export const cancelGame = () => {
    return {type:SET_START_GAME, gameStarted: false};
}

export const expandInstructions = () => {
    return {type:SET_INSTRUCTION_EXPAND, instructionsExpanded: true};
}

export const collapseInstructions = () => {
    return {type:SET_INSTRUCTION_EXPAND, instructionsExpanded: false};
}
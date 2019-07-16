import {DECK, SET_START_GAME} from "../actions/types";
import fetchStates from "./fetchState";

const DEFAULT_DECK = {
    deck_id: "",
    remaining: 0,
    fetchState: "",
    message:"",
}

const deckReducer = (state = DEFAULT_DECK, action) => {
    let remaining, deck_id, cards;
    
    switch (action.type) {
        case DECK.FETCH_SUCCESS:
            ({remaining, deck_id} = action);
            return {...state, remaining, deck_id, fetchState: fetchStates.success};
        case DECK.FETCH_ERROR:
            return {...state, message: action.message, fetchState: fetchStates.error};
        case DECK.DRAW_SUCCESS:
            ({cards, remaining} = action);
            return {...state, remaining, fetchState: fetchStates.success, cards};
        case DECK.DRAW_ERROR:
            return {...state, message: action.message, fetchState: fetchStates.error};
        case SET_START_GAME:
            return DEFAULT_DECK;
        default:
            return state;
    }
}

export default deckReducer;
import {DECK} from "./types";

const API_ADDRESS = "https://cors-anywhere.herokuapp.com/https://deckofcardsapi.com/deck/";

export const fetchDeckSuccess = deckJson => {
    const {remaining, deck_id} = deckJson;
    return {type: DECK.FETCH_SUCCESS, remaining, deck_id};
}

export const fetchDeckError = error => {
    return {type: DECK.FETCH_ERROR, message: error.message};
}

export const drawCardSuccess = json => {
    const {cards, remaining} = json;
    console.log("card", json);
    return {type: DECK.DRAW_SUCCESS, cards, remaining};
}

export const drawCardError = error => {
    // console.log("draw error")
    return {type: DECK.DRAW_ERROR, message: error.message};
}

export const draw = deckId => dispatch => { //need to deckId => dispatch...
    return fetch(`${API_ADDRESS}${deckId}/draw`)
            .then(response => {
                console.log("drawing")
                if (response.status !== 200) {
                    throw new Error("Unsuccessful request to deckofcards API");
                } else {
                    return response.json();
                }
            })
            .then(json => dispatch(drawCardSuccess(json)))
            .catch(error => dispatch(drawCardError(error)));
}

export const newDeckResult = () => dispatch => {
    return fetch(`${API_ADDRESS}new/shuffle`)
            .then(response => {
                if (response.status !== 200) {
                    throw new Error("Unsuccessful request to deckofcards API");
                } else {
                    return response.json();
                }
            })
            .then(json => dispatch(fetchDeckSuccess(json)))
            .catch(error => dispatch(fetchDeckError(error)));
}
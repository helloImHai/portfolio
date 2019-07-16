import React from "react";
import {connect} from "react-redux";
import {setGuessEven, setGuessOdd} from "../actions/guess";

const correctGuessesRecord = "HKDHSAK23BVEIfhdasifhaie";

const checkRecord = correctGuesses => {
    const record = Number(localStorage.getItem(correctGuessesRecord));
    if (correctGuesses > record) {
        localStorage.setItem(correctGuessesRecord, correctGuesses);
        return {record: correctGuesses, isNewRecord: true};
    }
    return {record, isNewRecord: false};
}

const Guess = props => {
    const {isNewRecord, record} = checkRecord(props.correctGuesses);
    const recordLabel = isNewRecord ? "🎉 New record" : "Record"
    return (
        <div>
            <p>Number of correct guesses: {props.correctGuesses}</p>
            <p>Number of cards remaining: {props.remaining}</p>
            <p>{recordLabel}: {record}</p>
            <h3>Will the next card be even or odd?</h3>
            <div>
                <span>
                    <button 
                        style={{marginRight: 5, backgroundColor: props.guess==="even" ?"#AED6F1":""}} 
                        onClick={props.even}
                    >Even
                    </button>
                    <button 
                        style={{marginRight: 5, backgroundColor: props.guess==="odd" ?"#AED6F1":""}} 
                        onClick={props.odd}
                    >Odd
                    </button>
                </span>
            </div>
            
        </div>
    );
}

const mapStateToProps = state => {
    return {
        guess: state.gameState.guess,
        correctGuesses: state.gameState.correctGuesses,
        remaining: state.deck.remaining
    };
}

const mapDispatchToProps = dispatch => {
    return {
        even: () => dispatch(setGuessEven()),
        odd: () => dispatch(setGuessOdd())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Guess);
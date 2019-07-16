import React, {Component} from "react";
import {connect} from "react-redux";
import {startGame, cancelGame} from "../actions/settings";
import Instructions from "./Instructions";
import DrawCard from "./DrawCard";
import Card from "./Card";
import Guess from "./Guess";
import {newDeckResult} from "../actions/deck";
import fetchStates from "../reducers/fetchState";

class App extends Component {

    startGame = () => {
        this.props.startGame();
        this.props.newDeckResult();
    }

    render() {
        console.log("app state",this.props); //state now will be in props
        if (this.props.fetchState === fetchStates.error) {
            return ( 
            <div>
                <h3>♦️ ♠️ Evens or Odds ♥️ ♣️</h3>
                <br/>
                <p>Please try reloading, an error occurred.</p>
                <p>{this.props.message}</p>
            </div>
            )
        }

        return (
            <div>
                <h3>♦️ ♠️ Evens or Odds ♥️ ♣️</h3>
                <br/>
                {
                    this.props.gameStarted ? (
                        <div>
                            <h3>Game is on!</h3>
                            <Guess/>
                            <Card/>
                            <br/>
                            <DrawCard/>
                            <br/><hr/>
                            <button onClick={this.props.cancelGame}>Cancel Game</button>
                            <br/>
                        </div>
                    ) : (
                        <div>
                            <h3>A game awaits</h3>
                            <br/>
                            <button onClick={this.startGame}>Start Game</button>
                            <br/>
                        </div>
                    )
                }
                <hr/>
                <br/>
                <Instructions/>
            </div>

        )
    } 
}

const mapStateToProps = state => {
    const {gameStarted,} = state.settings;
    const {fetchState, message} = state.deck;
    return {gameStarted, fetchState, message};
}

// const mapDispatchToProps = dispatch => {
//     return {
//         startGame: () => dispatch(startGame()),
//         cancelGame: () => dispatch(cancelGame()),
//         newDeckResult: () => newDeckResult(dispatch), //new deck result still sees dispatch bc dispatch is passed in here
//     }
// }

// const componentConnector = connect(
//     mapStateToProps, 
//     mapDispatchToProps
// );

const componentConnector = connect(
    mapStateToProps, 
    {startGame, cancelGame, newDeckResult}
);

export default componentConnector(App);
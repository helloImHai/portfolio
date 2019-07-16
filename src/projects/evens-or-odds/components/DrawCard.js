import React from "react";
import {connect} from "react-redux";
import {draw} from "../actions/deck";

const DrawCard = props => {
    return (
        <div>
            <button onClick={props.draw(props.deck_id)}>Draw the next card!</button>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        deck_id: state.deck.deck_id
    }
} 

const mapDispatchToProps = dispatch => {
    return {
        draw: deck_id => () => dispatch(draw(deck_id)) 
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps  
)(DrawCard);
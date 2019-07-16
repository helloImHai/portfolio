import React from "react";
import {connect} from "react-redux";

const Card = props => {
    if (!props.cards) {
        return null;
    }

    const {image, value, suit} = props.cards[0];

    return (
        <div>
            <h3>{value} of {suit}</h3>
            <img src={image}></img>
        </div>
    );
}

const mapStateToProps = state => {
    return {cards: state.deck.cards}
}

export default connect(mapStateToProps)(Card);
import React from "react";
import {connect} from "react-redux";
import {expandInstructions, collapseInstructions} from "../actions/settings";

const Instructions = props => {
    return (
        <div>
            <h3>Instructions</h3>
            <br/>
            {
                props.instructionsExpanded ? (
                    <div>
                        <p>Welcome to evens or odds. The games goes like this</p>
                        <p>The deck is shuffled. Then choose: will the next card be even or odd?</p>
                        <p>Make the choice on every draw, and see how many you get right!</p>
                        <p>(Face cards don't count)</p>
                        <button onClick={props.collapseInstructions}>Show less</button>
                    </div>
                ) : (
                    <div>
                        <button onClick={props.expandInstructions}>Read more</button>
                    </div>
                )
            }
        </div>
    )
}

// const mapStateToProps = state => {
//     return {instructionsExpanded: state.instructionsExpanded};
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         expandInstructions: () => dispatch(expandInstructions()),
//         collapseInstructions: () => dispatch(collapseInstructions()),
//     }
// }

// const componentConnector = connect(mapStateToProps, mapDispatchToProps);

// export default componentConnector(Instructions);

export default connect(
    state => ({instructionsExpanded: state.settings.instructionsExpanded}),
    {expandInstructions, collapseInstructions},
)(Instructions);
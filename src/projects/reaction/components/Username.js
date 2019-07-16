import React from 'react';
import {connect} from "react-redux";
import {changeUsername} from "../actions/username";

const Username = props => {
    const handleKeyChange = event => {
        props.changeUsername(event.target.value);
    }

    return (
        <div>
            <input 
                placeholder="Enter your name"
                onChange={handleKeyChange}
            />
        </div>
    ); 
}

const mapDispatchToProps = dispatch => {
    return {
        changeUsername: name => dispatch(changeUsername(name)),
    };
}

export default connect(
    state => ({name: state.user.username}), 
    mapDispatchToProps
)(Username);

// export default Username;
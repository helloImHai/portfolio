import React, {Component} from "react";
import {newMessage} from "../actions/messages";
import {PubSubContext} from "../pubsub";
import {connect} from 'react-redux';

class PublishMessage extends Component {
    state = {
        text: "",
    }

    updateText = event => {
        this.setState({text: event.target.value});
    }

    publishMessage = () => {
        // console.log("props when publish", this.props);
        this.context.pubsub.publish(newMessage({text: this.state.text, username: this.props.username}));
    }

    handleKeyPress = event => {
        if (event.key === 'Enter') {
            this.publishMessage();
        }
    }

    render() {
        return (
            <div>
                <h3>Got something to say?</h3>
                <input onChange={this.updateText} onKeyPress={this.handleKeyPress}/>
                <button onClick={this.publishMessage}>Publish</button>
            </div>
        )
    }
}

PublishMessage.contextType = PubSubContext;

const mapStateToProps = state => {
    return {
        username: state.user.username,
    };
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, 
    mapDispatchToProps)(PublishMessage);
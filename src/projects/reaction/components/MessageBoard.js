import React from 'react';
import {connect} from "react-redux";
import CreateReaction from './CreateReaction';

const MessageReactions = props => {
    if (!props.messageReactions) {
        return null;
    }
    // console.log(props)
    const messageReactions = props.messageReactions;
    return (
        messageReactions.map(reaction => {
            console.log("indiv reaction", reaction);
            const { id , emoji, username } = reaction;
            return (
                <span key={id}>
                    <em>{username}: </em>
                    {emoji}  
                </span>
            )
        })
    )
}

const MessageBoard = ({messages, reactions}) => {
    return (
        messages.sort((x,y) => y.timestamp - x.timestamp).map(message => {
            const {id, username, text, timestamp} = message;
            return (
                <div key = {id}>
                    <h4>{new Date(timestamp).toLocaleString()}</h4>
                    <p>{text}</p>
                    <h4>- {username} -</h4>
                    <CreateReaction messageId={id}/>
                    <MessageReactions messageReactions={reactions[id]}/>
                    <hr/>
                </div>
            );
        })
    );
}

const mapStateToProps = state => ({messages: state.messages.items, reactions: state.reactions});
export default connect(mapStateToProps, {})(MessageBoard);

import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./reducers";
import App from "./components/App";
import PubSub, {PubSubContext} from "./pubsub";
import {newMessage} from "./actions/messages";
import './index.css';

const store = 
    createStore(rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

console.log("initial store", store.getState());
store.subscribe(() => console.log("store", store.getState()));

const pubsub = new PubSub();

pubsub.addListener({
    message: messageObject => {
        const {message, channel} = messageObject;
        console.log("Received", message, "channel", channel);

        store.dispatch(message);
    }
});

setTimeout(() => {
    pubsub.publish(newMessage({text: "Hello World!", username: "Hai"}));
}, 1000);

const Reaction = () => {
        return (
        <Provider store = {store}>
            <PubSubContext.Provider value={{pubsub}}>
                <App/>
            </PubSubContext.Provider>
        </Provider>
    );
};

export default Reaction;

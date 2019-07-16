import React, { Component } from "react";
import Header from "./Header";

const Joke = (props) => { //React component
    const { setup, punchline } = props.joke;
    return <p>{setup} <em>{punchline}</em></p>
}

class Jokes extends Component {
    state = {joke: {}, ten: [], showJokes: false};

    componentDidMount() {
        fetch("https://official-joke-api.appspot.com/random_joke")
            .then(response => response.json())
            .then(json => this.setState({joke: json}))
            .catch(error => alert(error));
    }

    tenMore = () => {
        this.setState({showJokes: true});
        fetch("https://official-joke-api.appspot.com/random_ten")
            .then(response => response.json())
            .then(json => this.setState({ten: json}))
            .catch(error => alert(error));
    }

    hideJokes = () => {
        this.setState({showJokes :false, ten: []});
    }

    render() {
        return (
            <div>
                <h2>Highlighted joke</h2>
                <Joke joke={this.state.joke}/>
                <hr/>
                <div> 
                    { (!this.state.showJokes)
                    ?
                    <div>
                        <h3>Want more jokes?</h3>
                        <button className="myButton" onClick={this.tenMore}>Click me baby!</button>
                    </div>
                    : <div margin="20px">
                        <button className="myButton" onClick={this.hideJokes}>Hide jokes!</button>
                        {this.state.ten.map(joke => <Joke key={joke.id} joke ={joke}/>)}
                    </div>
                    }
                </div>
            </div>
        )
    }
}

export default Jokes;
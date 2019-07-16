import React, { Component } from "react";
import Search from "./Search";
import Artist from "./Artist";
import Tracks from "./Tracks";

class App extends Component {
    state = {
        artist: null,
        tracks: [],
    }

    search = artistQuery => {
        fetch("https://spotify-api-wrapper.appspot.com/artist/" + artistQuery)
            .then(response => response.json())
            .then(json => {

                if (json.artists.total > 0) {
                    const artist = json.artists.items[0];
                    this.setState({artist});

                    fetch("https://spotify-api-wrapper.appspot.com/artist/"
                        + this.state.artist.id
                        + "/top-tracks")
                        .then(response => response.json())
                        .then(json => this.setState({tracks: json.tracks}))
                        .catch(error => alert(error.message));
                } else {
                    alert("no artists found");
                }
            })
            .catch(error => alert(error.message));
        
    }

    render() {
        console.log("state",this.state);
        return (
            <div>
                <h2>Music Master</h2>
                <Search search={this.search}/>
                <Artist artist={this.state.artist}/>
                <Tracks tracks={this.state.tracks}/>
            </div>
        )
    } 
}

export default App;
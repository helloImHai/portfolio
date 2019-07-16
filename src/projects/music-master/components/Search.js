import React, {Component} from "react";

class Search extends Component {
    state = {
        artistQuery: "",
    }

    updateArtistQuery = (event) => {
        console.log("event", event.target.value);
        this.setState({artistQuery: event.target.value})
    }

    handleKeyPress = event => {
        if (event.key === "Enter") {
            this.search(); //in App
        }
    }

    search = () => { //passing down callbacks
        this.props.search(this.state.artistQuery);
    }

    render() {
        return (
            <div>
                <input
                    placeholder="Search an Artist"
                    onChange={this.updateArtistQuery}
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.search}>Search</button>
            </div>
        )
    }
    
}  

export default Search;
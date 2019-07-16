import React, {Component} from "react";

class Tracks extends Component {
    state = {
        playing: false,
        audio: null,
        url: null,
    }

    playAudio = previewUrl => () => {
        const audio = new Audio(previewUrl);
        
        if (!this.state.playing) {
            this.setState({playing: true, audio, url: previewUrl});
            audio.play();
        } else {
            this.state.audio.pause();
            if (this.state.url === previewUrl) {
                this.setState({playing: false, url: null, audio: null})
            } else {
                this.setState({audio, url: previewUrl});
                audio.play();
            }
        }
    };

    trackIcon = track => {
        if (!track.preview_url) {
            return <span>N/A</span>;
        }

        if(this.state.playing && this.state.url === track.preview_url) {
            return <span>| |</span>;
        }
        return <span>&#9654;</span>;
    }

    render() {
        const tracks = this.props.tracks;

        return (
            <div>
                {   
                    tracks.map(track => {
                        const {id, name, album, preview_url} = track;
                        console.log(preview_url);
                        return (
                            <div 
                                key={id} 
                                onClick = {this.playAudio(preview_url)}
                                className = "track"
                            >
                                <img 
                                    src={album.images[0].url} 
                                    alt="track-profile"
                                    className="track-image"
                                />
                                <p className="track-text">{name}</p>
                                <p className="track-icon">{this.trackIcon(track)}</p>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default Tracks;
import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import profilePic from "../assets/profile.png";
import Title from "./Title";

class App extends Component { // Component can have many elements combined
    state = {displayBio: false,};

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio});
    }

    render() {
        return (
            <div>
                <img src={profilePic} alt="profilePic" className="profile" margin-bottom="20px"></img>
                <h1>Hello!</h1>
                <p>My name is Hai, welcome to my portfolio!</p>
                <Title/>
                <div className="p">
                {
                    this.state.displayBio ? 
                    (
                        <div>
                            <p>
                                I am a year 2 student in NUS School of Computing. I made this portfolio website
                                to practice the limited knowledge I have in web development. 
                                I am always keen to create and learn new things.
                            </p>
                            <button className="myButton" onClick = {this.toggleDisplayBio}>Read less</button>
                        </div>
                    )
                    : <div>
                        <button className="myButton" onClick = {this.toggleDisplayBio}>Read more</button>
                    </div>
                }  
                </div>
                <hr/>
                <Projects/>
                <hr/>
                <SocialProfiles/>
            </div>

        )
    } 
}

export default App;
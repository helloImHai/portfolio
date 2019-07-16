import React, { Component } from 'react';

const TITLES = [
    'always enthusiastic and eager to learn new skills',
    'passionate about my work.',
    'ambitious and driven.'
];

class Title extends Component {
    state = {
        index: 0,
        fadeIn: true
    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => { // don't need to set 
            const index = (this.state.index + 1) % TITLES.length;

            this.setState({index, fadeIn: true}); //everytime set state is called, render will be called.
            this.timeOut = setTimeout(() => { this.setState({fadeIn: false})}, 2000);
        }, 4000);
    }

    componentWillUnmount() { // not needed code, I don't know why don't need to clear
        clearInterval(this.titleInterval);
        clearTimeout(this.timeOut);
    }

    componentDidMount() {
        this.timeOut = setTimeout(() => { this.setState({fadeIn: false})}, 2000);
        this.animateTitles();
    }

    render() {
        const {fadeIn, index} = this.state;

        return (
            <p className = {fadeIn ? "title-fade-in" : "title-fade-out"}>
                I am {TITLES[index]}
            </p>
        )
    }
}

export default Title;
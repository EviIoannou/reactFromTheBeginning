import React, { Component } from 'react';

class StatePractice extends Component {
    constructor() {
        super();
        this.state = {
            message: "",
            imgWidth: "",
            imageSrc: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
            // imageSrc: "http://lorempixel.com/400/200/"
        }
    }

    handleFocus = (event) => {
        this.setState({
            message: "You agree to our terms and conditions by filling out this form"
        })
    }

    emptyState = (event) => {
        this.setState({
            message: "",
            imgWidth: ""
        })
    }

    imageLoad = (event) => {
        if(event.target.width > 400) {
            console.log("Your image is too large")

            // Remove image on load if it is too large:

            // this.setState({
            //     imageSrc: ""
            // })
        }
    }

    render() {
        return (
            <div>
                <input onFocus={this.handleFocus} type="text" />
                <h3 onMouseEnter={this.emptyState}>{this.state.message}</h3>
                <img alt="" onLoad={this.imageLoad} src={this.state.imageSrc} />
            </div>

        )
    }
}

export default StatePractice
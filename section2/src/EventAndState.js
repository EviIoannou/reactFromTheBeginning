import React, { Component } from 'react'

class EventAndState extends Component {
    constructor() {
        super();
        this.state = {
            inputText : ""
        }
        // this.handleChange = this.handleChange.bind(this)
    }
    handleClick = () => {
        this.setState({
            inputText: ""
        })
    }

    handleChange = (event) => {
        // console.dir(event.target)
        this.setState({
            inputText: event.target.value
        })
        console.log(this.state.inputText)
    }

    handleSubmit = (event) => {
        this.setState({
            inputText: "State is cool"
        })
        console.log('Form submitted');
        event.preventDefault();
    }

    render () {
        return (
            <div>
                <h1>{this.state.inputText}</h1>
                <form onSubmit={this.handleSubmit}>
                    <button onClick={this.handleClick}>Click me!</button>
                    <input onChange={this.handleChange} type="text" placeholder="text here" />
                </form>
            </div>
        )
    }
}

export default EventAndState
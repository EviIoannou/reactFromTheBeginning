import React, { Component } from 'react';
import './temperatureInput.css';

class TemperatureInput extends Component {

    render() {
        const temperature = this.props.temperature
        let hotClass;
        if(temperature > 100) {
            hotClass = 'too-hot'
        }

        return (
            <div className="temp-input">
                <legend className={hotClass}>Enter temperature in {this.props.scale}:</legend>  
                <input
                value={temperature}
                onChange={(e)=>(this.props.handleChange(e, this.props.scale))} />
            </div>

        )
    }
}

export default TemperatureInput;
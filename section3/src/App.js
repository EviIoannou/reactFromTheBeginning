import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Headers from './Headers';
import Modal from './Modal';

class App extends Component {
  constructor(){
    super();
    this.state = {
      temp: "",
      cityName: "",
      weather: "",
      high: "",
      low: "",
      icon: "",
      isRaining: "",
      showModal: true
    }
  }

  componentDidMount () {
    this.getCityWeather('Athens');
    var elems = document.querySelectorAll('.modal');
    var instances = window.M.Modal.init(elems);
  }
  
  componentDidUpdate (prevProps, prevState) {
    console.log(prevState)
    if(this.state.weather !== prevState.weather) {
      const isRaining = this.state.weather.includes("rain");
      if(isRaining) {
        this.setState({
          isRaining: "Rain rain go away!"
        })
      } else {
        this.setState({
          isRaining: ""
        })
      }
    }
  }

  searchCity = (e)=> {
    e.preventDefault();
    const city = document.getElementById('city').value;
    this.getCityWeather(city)
  }

  getCityWeather = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e312dbeb8840e51f92334498a261ca1d&units=metric`
    axios.get(url).then((resp)=> {
      this.setState ({
        temp: resp.data.main.temp,
        high: resp.data.main.temp_max,
        low: resp.data.main.temp_min,
        weather: resp.data.weather[0].description,
        icon: resp.data.weather[0].icon,
        cityName: resp.data.name        
      }) 
    })
  }

  removeModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    const iconUrl=` http://openweathermap.org/img/wn/${this.state.icon}.png`
    return (
      <div className="App">
          <div className="row">
            <div className="col s6 offset-s3">
              {/* <button onClick={this.removeModal} className="btn">Remove from DOM</button> */}
              <Headers temp={this.state.temp} isRaining={this.state.isRaining}/>
              <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Details</a>
              <form onSubmit={this.searchCity}>
                <input type="text" id="city" placeholder="Enter a city name"/>   
              </form>
            </div>
          </div>
          {this.state.showModal ?           
            <Modal 
              cityName={this.state.cityName} 
              high={this.state.high} 
              low={this.state.low}
              weather={this.state.weather}
              iconUrl={iconUrl}/> : "" }
         
      </div>
    ); 
  }

}

export default App;

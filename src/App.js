import React, { Component } from 'react';
import './App.css';

const PLACES = [
  { name: 'Kiev' },
  { name: 'Berlin' },
  { name: 'Moscow' },
  { name: 'London' },
  { name: 'Toronto' },
];

class WeatherMap extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null,
    };
  }

  componentDidMount() {
    const name = this.props.name;
    const URL =
      'http://api.openweathermap.org/data/2.5/forecast?q=' +
      name +
      '&APPID=98040809559bde26b804d64b294bff4c&units=metric';

    fetch(URL)
      .then(res => res.json())
      .then(json => {
        this.setState({ weatherData: json });
      });
  }

  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) return <div>Loading...</div>;
    const weather = weatherData.weather[0];
    const iconUrl = 'http://openweathermap.org/img/w/' + weather.icon + '.png';
    return (
      <div>
        <h1>
          {weather.main} in {weatherData.name}
          <img src={iconUrl} alt={weatherData.description} />
        </h1>
        <p>Current: {weatherData.main.temp}°</p>
        <p>High: {weatherData.main.temp_max}°</p>
        <p>Low: {weatherData.main.temp_min}°</p>
        <p>Wind Speed: {weatherData.wind.speed} mi/hr</p>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeCity: 0,
    };
  }

  render() {
    const activeCity = this.state.activeCity;
    return (
      <div className="App">
        {PLACES.map((place, index) => (
          <button
            key={index}
            onClick={() => {
              this.setState({ activeCity: index });
            }}
          >
            {place.name}
          </button>
        ))}
        <WeatherMap key={activeCity} name={PLACES[activeCity].name} />
      </div>
    );
  }
}

export default App;

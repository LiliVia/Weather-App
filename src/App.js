import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    location: '',
    data: {},
  };

  fetchData = evt => {
    evt.preventDefault();

    const location = encodeURIComponent(this.state.location);

    const url =
      'http://api.openweathermap.org/data/2.5/forecast?q=' +
      location +
      '&APPID=98040809559bde26b804d64b294bff4c&units=metric';

    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.setState({ data: json });
      });
  };

  changeLocation = evt => {
    this.setState({
      location: evt.target.value,
    });
  };

  render() {
    let currentTemp = 'Loading temp ...';
    if (this.state.data.list) {
      currentTemp = this.state.data.list[0].main.temp;
    }
    return (
      <div>
        <h1>Weather</h1>
        <form onSubmit={this.fetchData}>
          <label>
            What is the weather like today in
            <input
              placeholder={'City, Country'}
              type="text"
              value={this.state.location}
              onChange={this.changeLocation}
            />
          </label>
        </form>
        <p className="temp-wrapper">
          <span className="temp">{currentTemp} &deg;C</span>
        </p>
      </div>
    );
  }
}

export default App;

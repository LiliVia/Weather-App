import React, { Component } from 'react';
import './App.css';
import xhr from 'xhr';

class App extends Component {
  state = {
    location: '',
    data: {},
  };

  fetchData = evt => {
    evt.preventDefault();

    var location = encodeURIComponent(this.state.location);

    var urlPrefix = 'http://api.openweathermap.org/data/2.5/forecast?q=';
    var urlSuffix = '&APPID=98040809559bde26b804d64b294bff4c&units=metric';
    var url = urlPrefix + location + urlSuffix;

    var self = this;

    xhr({ url: url }, function(err, data) {
      self.setState({
        data: JSON.parse(data.body),
      });
    });
  };

  changeLocation = evt => {
    this.setState({
      location: evt.target.value,
    });
  };

  render() {
    var currentTemp = "Didn't load yet...";
    if (this.state.data.list) {
      var mainTemp = this.state.data.list[0].main.temp;
      currentTemp = `${mainTemp} C`;
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
          <span className="temp">{currentTemp}</span>
        </p>
      </div>
    );
  }
}

export default App;

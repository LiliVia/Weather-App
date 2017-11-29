import React, { Component } from 'react';
import './App.css';

const PLACES = [
  { name: 'Kiev' },
  { name: 'Berlin' },
  { name: 'Moscow' },
  { name: 'London' },
  { name: 'Praha' },
];

class WeatherMap extends Component {
  render() {
    return <h1> Weather map for city {this.props.name}</h1>;
  }
}

class App extends Component {
  // state = {
  //   location: '',
  //   data: {},
  // };

  // fetchData = evt => {
  //   evt.preventDefault();

  //   const location = encodeURIComponent(this.state.location);

  //   const url =
  //     'http://api.openweathermap.org/data/2.5/forecast?q=' +
  //     location +
  //     '&APPID=98040809559bde26b804d64b294bff4c&units=metric';

  //   fetch(url)
  //     .then(res => res.json())
  //     .then(json => {
  //       this.setState({ data: json });
  //     });
  // };

  // changeLocation = evt => {
  //   this.setState({
  //     location: evt.target.value,
  //   });
  // };

  render() {
    return (
      <div className="App">
        {PLACES.map((place, index) => (
          <button
            key={index}
            onClick={() => {
              console.log('clicked index ' + index);
            }}
          >
            {place.name}
          </button>
        ))}
        <WeatherMap name={'Kiev'} />
      </div>
    );
  }
}

export default App;

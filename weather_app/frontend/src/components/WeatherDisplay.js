import React from 'react';

class WeatherDisplay extends React.Component {
  render() {
    const { weatherData } = this.props;

    if (!weatherData) {
      return <div>Loading...</div>;
    }

    const { main, name } = weatherData;
    const { temp, humidity } = main;

    return (
      <div className="weather-display">
        <h2>Weather in {name}</h2>
        <p>Temperature: {temp}°C</p>
        <p>Humidity: {humidity}%</p>
      </div>
    );
  }
}

export default WeatherDisplay;
```javascript
import React, { useState } from 'react';
import './styles/App.css';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import WeatherService from './services/WeatherService';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (location) => {
    const data = await WeatherService.getWeather(location);
    setWeatherData(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
      <SearchBar onSearch={handleSearch} />
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
}

export default App;
```
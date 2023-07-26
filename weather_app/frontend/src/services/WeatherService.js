import axios from 'axios';

const API_KEY = 'your_api_key_here';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';

const WeatherService = {
  getWeather: async (location) => {
    try {
      const response = await axios.get(`${BASE_URL}?q=${location}&appid=${API_KEY}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};

export default WeatherService;
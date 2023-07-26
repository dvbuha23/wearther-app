const axios = require('axios');

const API_KEY = process.env.WEATHER_API_KEY;
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';

const getWeatherData = async (location) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${location}&appid=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching weather data: ${error}`);
    throw error;
  }
};

module.exports = {
  getWeatherData,
};
const express = require('express');
const router = express.Router();
const WeatherApiService = require('../services/WeatherApiService');

router.get('/weather/:location', async (req, res) => {
    try {
        const location = req.params.location;
        const weatherData = await WeatherApiService.getWeather(location);
        res.json(weatherData);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving weather data' });
    }
});

module.exports = router;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from the Node.js backend!');
});

app.get('/weather/:city', async (req, res) => {
  const city = req.params.city;
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
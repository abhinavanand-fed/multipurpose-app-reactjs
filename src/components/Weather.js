import React, { useState, } from 'react';
import axios from 'axios';

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(location.trim() === '') {
      return;
    }
    const options = {
      method: 'GET',
      url: 'URL',
      params: {q: location},
      headers: {
        'X-RapidAPI-Key': 'API-KEY',
        'X-RapidAPI-Host': 'API-HOST'
      }
    };
    axios.request(options)
      .then(response => {
        setWeatherData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Location: 
          <input type="text" value={location} onChange={e => setLocation(e.target.value)}/>
        </label>
        <button type="submit" disabled={location.trim() === ''}>Search</button>
      </form>
      {weatherData && location ?
  <div>
    <p>Country: {weatherData.location.country}</p>
    <p>State: {weatherData.location.region}</p>
    <p>Max Temperature: {weatherData.forecast.forecastday[0].day.maxtemp_c}°C</p>
    <p>Min Temperature: {weatherData.forecast.forecastday[0].day.mintemp_c}°C</p>
  </div>
  : <p>Loading...</p>}

    </div>
  );
}

export default WeatherApp;




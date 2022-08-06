import React, { useState } from 'react';
import './Weather.css';
import axios from "axios";

import WeatherInfo from './WeatherInfo';

const Weather = (props) => {
  const [weatherData, setWeatherData] = useState({ready:false});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
  setWeatherData({
    ready: true,
    date: new Date(response.data.dt * 1000),
    icon: response.data.weather[0].icon,
    temperature: response.data.main.temp,
    wind:  Math.round(response.data.wind.speed),
    humidity: response.data.main.humidity,
    description: response.data.weather[0].main,
    city: response.data.name
  });
}
function search() {
  let apiKey = "094780c710fa4efd669f0df8c3991927";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

}

function handleSubmit(event) {
  event.preventDefault();
 search();
}
function handleCityChange(event) {
  setCity(event.target.value);
}

if(weatherData.ready){
   return(  
  <div className="Weather">
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
            autoFocus="on"
            onChange={handleCityChange}
          />
        </div>
        <div className="col-3">
          <input type="submit" value="Search" className="btn btn-primary w-100" />
        </div>
      </div>
    </form>
    <WeatherInfo data = {weatherData} />
   </div> 
  );
} else {
  search();
  return "Loding a city ...";
  }
}

export default Weather;

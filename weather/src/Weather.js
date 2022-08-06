import React, { useState } from 'react';
import './Weather.css';
import axios from "axios";
import FormattedDate from "./Date";

const Weather = (props) => {
  const [weatherData, setWeatherData] = useState({ready:false});

  function handleResponse(response) {
  setWeatherData({
    ready: true,
    date: new Date(response.data.dt * 1000),
    icon:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    temperature: response.data.main.temp,
    wind:  Math.round(response.data.wind.speed),
    humidity: response.data.main.humidity,
    description: response.data.weather[0].main,
  });
}
if(weatherData.ready){
   return(  
  <div className="Weather">
    <form>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
            autoFocus="on"
          />
        </div>
        <div className="col-3">
          <input type="submit" value="Search" className="btn btn-primary w-100" />
        </div>
      </div>
    </form>
    <h1>{props.defaultCity}</h1>
    <ul>
      <li><FormattedDate date={weatherData.date}/></li>
      <li className='text-capitalize'>{weatherData.description}</li>
    </ul>
    <div className="row mt-3">
      <div className="col-6">
        <div className="clearfix d-flex">
        <img
          src={weatherData.icon}
          alt={weatherData.description}
          className="d-inline-block"
        />
        <div>
        <span className="temperature">{Math.round(weatherData.temperature)}</span>
        <span className="unit">ºC</span>
        </div>
       </div>
      </div>
      <div className="col-6">
        <ul>
          <li>Humidity: {weatherData.humidity}%</li>
          <li>Wind: {weatherData.wind}km/h</li>
        </ul>
      </div>
    </div>
  </div> 
  );
} else {
  let apiKey = "094780c710fa4efd669f0df8c3991927";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loding a city ...";
  }
}

export default Weather;

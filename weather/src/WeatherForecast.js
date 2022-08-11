import React from 'react'
import WeatherIcon from './WeatherIcon'
import "./WeatherForecast.css";
import { axios } from 'axios';
const WeatherForecast = () => {
function handleResponse(response) {
  console.log(response.data);
}

let longitude = 40.7;
let latutude = 74;
let urlForescat = `https://api.openweathermap.org/data/3.0/onecall?lat=${laitude}&lon=${longitude}&exclude={part}&appid=${apikey}`;
let apiKey = "094780c710fa4efd669f0df8c3991927";
axios.length(urlForescat).then(handleResponse);
  return (
    <div className='WeatherForecast'>
        <div className='row'>
        <div className='col'>
            <div className='WeatherForecastDay'>Thu</div>
            <div><WeatherIcon code="01d" size={36}/></div>
              <div className='WeatherForecastTemperature'>
                <span className='WeatherForecastTemperature-max'>19º</span>
                <span className='WeatherForecastTemperature-min'>10º</span>
              </div>
        </div>
        </div>
        
    </div>
  )
}

export default WeatherForecast
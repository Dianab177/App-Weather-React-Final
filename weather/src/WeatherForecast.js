import React from 'react'
import WeatherIcon from './WeatherIcon'
import "./WeatherForecast.css";
const WeatherForecast = () => {
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
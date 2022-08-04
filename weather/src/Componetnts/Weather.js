import React from 'react'
import PropTypes from 'prop-types';
import "./Weather.css";

const Weather = props => {
  return (
    <div className='Weather'>
        <h1>London</h1>
        <ul>
            <li>Thursday 13:20</li>
            <li>Cloudy</li>
        </ul>
        <div className='row'>
            <div className='col-6'>
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Cloudy"/>
                6ºC
            </div>
        </div>
    </div>
  )
}

Weather.propTypes = {}

export default Weather
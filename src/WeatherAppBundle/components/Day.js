import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Day({ day }, ...arg) {

  var midDay = getMidTemperature(day);
  console.log(midDay);
  return (
    <div className="sm-days columns">
      <div className="day">
        {Moment(midDay.dt_txt).format('ddd')}
      </div>
      <div className="day-weather-icon">
        <i className="wi wi-day-showers"></i>
      </div>
      <div className="day-weather-info">
        <h2>{formatTemperature(midDay.main.temp)}<sup>o</sup>C</h2>
      </div>
    </div>
  )
}

function formatTemperature(temp) {
  if(temp > 120) {
    return (++temp - 273.15).toFixed(0);
  }

  return temp;
}

function getMidTemperature(day) {
  var arr = Object.keys(day)

  if(arr.length === 1) {
    return day[arr[0]]
  } 
  
  return Number.isInteger(arr.length / 2) ? 
    day[arr[(arr.length / 2) - 1]] : 
    day[arr[((arr.length - 1) / 2) - 1]];
}

Day.propTypes = {
  
}

export default Day
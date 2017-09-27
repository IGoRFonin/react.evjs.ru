import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Day({ day, temperature }) {
  return (
    <div className="sm-days columns">
      <div className="day">
        {day}
      </div>
      <div className="day-weather-icon">
        <i className="wi wi-day-showers"></i>
      </div>
      <div className="day-weather-info">
        <h2>{temperature}<sup>o</sup>C</h2>
      </div>
    </div>
  )
}

Day.propTypes = {
  
}

export default Day
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { formatTemperature, getMidTemperature} from '../helper'


function Day({ day }, ...arg) {

  const midDay = getMidTemperature(day);
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

Day.propTypes = {
  
}

export default Day
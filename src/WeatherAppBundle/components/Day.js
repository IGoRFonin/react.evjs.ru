import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'moment';
import { formatTemperature, getMidTemperature} from '../helper'
import { changeDay } from '../AC'

const Day = ({ day, time, dispatch }, ...arg) => {
  const midDay = getMidTemperature(day);
  return (
    <div className="sm-days columns" onClick={ (e) => dispatch(changeDay(time))}>
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

export default connect()(Day);
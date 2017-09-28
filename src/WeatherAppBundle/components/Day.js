import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'moment';
import { formatTemperature, getMidTemperature, weatherType } from '../helper';
import { changeDay } from '../AC';
import icons from '../weatherIcons';

const Day = ({ day, time, dispatch, moreFive }, ...arg) => {
  const midDay = getMidTemperature(day);
  let smDays = {};
  if(moreFive) {
    smDays = {
      width: '16.6%'
    }
  }
  return (
    <div style={smDays} className="sm-days columns" onClick={ (e) => dispatch(changeDay(time))}>
      <div className="day">
        {Moment(midDay.dt_txt).format('ddd')}
      </div>
      <div className="day-weather-icon">
        <i className={"wi " + weatherType(midDay.weather[0].id, icons)}></i>
      </div>
      <div className="day-weather-info">
        <h2>{formatTemperature(midDay.main.temp)}<sup>o</sup>C</h2>
      </div>
    </div>
  )
}

Day.propTypes = {
  
}

export default connect(state => {
  return {
    moreFive: Object.keys(state.weather).length > 5 
  }
})(Day);
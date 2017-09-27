import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { formatTemperature, getMidTemperature} from '../helper'
import Moment from 'moment';


class Header extends Component {
  render() {
    const {weather, currentCity} = this.props;

    if (Object.keys(weather).length === 0) return null;
    return (
      <header>
        <div className="row">
          
          <div className="sm-four columns current-city-name">
            <h2>London</h2>
          </div>
          
          <div className="sm-four columns current-city-weather">
            <i className="wi wi-day-showers"></i>
          </div>
          
          <div className="sm-four columns current-city-temp">
            <h2>{formatTemperature(weather.main.temp)}<sup>o</sup>C</h2>
          </div>
          
          <span className="current-city-day">{Moment(weather.dt_txt).format('ddd')}</span>
          
        </div>
      </header>
    )
  }
}

export default connect((state, ownProps) => {
  let weather;
  if(state.weather[state.currentWeather] !== undefined) {
    weather = getMidTemperature(state.weather[state.currentWeather]);
  } else {
    weather = {};
  }
  return {
    weather,
    currentCity: state.cities[state.currentCity]
  }
})(Header)
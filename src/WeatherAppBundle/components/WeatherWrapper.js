import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadWeather } from '../AC'

class WeatherWrapper extends Component {
  

  componentDidMount() {
    const { weather, loadWeather, currentCity } = this.props;

    if(Object.keys(weather).length === 0) {
      loadWeather(currentCity);
    }
  }
  render() {
    console.log(this.props);
    return (
      <section className="week-days">
        <div className="row">
          <div className="sm-days columns">
            <div className="day">
              Sun
            </div>
            <div className="day-weather-icon">
              <i className="wi wi-day-showers"></i>
            </div>
            <div className="day-weather-info">
              <h2>18<sup>o</sup>C</h2>
            </div>
          </div>
          
          <div className="sm-days columns">
            <div className="day">
              Mon
            </div>
            <div className="day-weather-icon">
              <i className="wi wi-cloudy"></i>
            </div>
            <div className="day-weather-info">
              <h2>19<sup>o</sup>C</h2>
            </div>
          </div>
          
          <div className="sm-days columns">
            <div className="day">
              Tue
            </div>
            <div className="day-weather-icon">
              <i className="wi wi-showers"></i>
            </div>
            <div className="day-weather-info">
              <h2>17<sup>o</sup>C</h2>
            </div>
          </div>
          
          <div className="sm-days columns">
            <div className="day">
              Wed
            </div>
            <div className="day-weather-icon">
              <i className="wi wi-day-lightning"></i>
            </div>
            <div className="day-weather-info">
              <h2>18<sup>o</sup>C</h2>
            </div>
          </div>
          
          <div className="sm-days columns">
            <div className="day">
              Thu
            </div>
            <div className="day-weather-icon">
              <i className="wi wi-cloudy"></i>
            </div>
            <div className="day-weather-info">
              <h2>19<sup>o</sup>C</h2>
            </div>
          </div>
          
          <div className="sm-days columns">
            <div className="day">
              Fri
            </div>
            <div className="day-weather-icon">
              <i className="wi wi-day-showers"></i>
            </div>
            <div className="day-weather-info">
              <h2>20<sup>o</sup>C</h2>
            </div>
          </div>
          
          <div className="sm-days columns">
            <div className="day">
              Sat
            </div>
            <div className="day-weather-icon">
              <i className="wi wi-day-sunny"></i>
            </div>
            <div className="day-weather-info">
              <h2>18<sup>o</sup>C</h2>
            </div>
          </div>
          
        </div>
        
      </section>
    )
  }
}

export default connect((state) => {
  const { weather, currentCity } = state;
  return {
    weather,
    currentCity
  }
}, { loadWeather })(WeatherWrapper);
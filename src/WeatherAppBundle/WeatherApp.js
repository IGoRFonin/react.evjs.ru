import React, { Component } from 'react';
import PropTypes from 'prop-types';
import City from './components/City';
import Weather from './components/Weather';

class WeatherApp extends Component {
  render() {
    return (
        <div className="card">
          <City />
          <Weather />
        </div>
    )
  }
}

export default WeatherApp
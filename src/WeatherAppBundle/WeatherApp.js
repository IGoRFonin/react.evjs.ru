import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';
import WeatherWrapper from './components/WeatherWrapper';

class WeatherApp extends Component {
  render() {
    return (
        <section className="container">
          <Header />
          <WeatherWrapper />
        </section>
    )
  }
}

export default WeatherApp
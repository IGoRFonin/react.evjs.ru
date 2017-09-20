import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './components/Header';
import WeatherWrapper from './components/WeatherWrapper';
import store from './store'

class WeatherApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <section className="container">
          <Header />
          <WeatherWrapper />
        </section>
      </Provider>
    )
  }
}

export default WeatherApp
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './components/Header';
import WeatherWrapper from './components/WeatherWrapper';
import store from './store'


class WeatherApp extends Component{
  componentDidMount() {
    document.body.style.background = 'url(https://unsplash.imgix.net/23/pink-sky.JPG?fit=crop&fm=jpg&h=700&q=75&w=1050) center center/cover fixed';
  }
  componentWillUnmount() {
   document.body.style.background = ''; 
  }
  render() {
    return (
      <Provider store={store}>
        <section className="container weather-app">
          <Header />
          <WeatherWrapper />
        </section>
      </Provider>
    )
  }
}

export default WeatherApp
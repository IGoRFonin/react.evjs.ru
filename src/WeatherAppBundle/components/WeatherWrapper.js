import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadWeather } from '../AC'
import Moment from 'moment';
import Day from './Day';

class WeatherWrapper extends Component {
  
  componentDidMount() {
    const { weather, loadWeather, currentCity } = this.props;

    if(Object.keys(weather).length === 0) {
      loadWeather(currentCity);
    }
  }

  getWeather(obj) {
    console.log(obj);
    let list = [];
    for(let day in obj) {
      list.push(<Day key={day} day={obj[day]} />);
    }
    
    return list;
  }
  render() {
    const { weather } = this.props
    return (
      <section className="week-days">
        <div className="row">
          {this.getWeather(weather)}
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
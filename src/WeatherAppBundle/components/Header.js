import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { formatTemperature, getMidTemperature, weatherType} from '../helper';
import Moment from 'moment';
import icons from '../weatherIcons';


class Header extends Component {
  state = {
    city: 'London'
  }

  cityHandler = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  render() {
    const {weather, currentCity} = this.props;
    const {city} = this.state

    if (Object.keys(weather).length === 0) return null;
  
    return (
      <header>
        <div className="row">
          
          <div className="sm-four columns current-city-name">
            <input className="city" type="text"
             value={city}
             onChange={this.cityHandler}/>
          </div>
          
          <div className="sm-four columns current-city-weather">
            <i className={"wi " + weatherType(weather.weather[0].id, icons)}></i>
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
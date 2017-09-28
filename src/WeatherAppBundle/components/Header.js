import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { formatTemperature, getMidTemperature, weatherType} from '../helper';
import Moment from 'moment';
import icons from '../weatherIcons';
import CityList from './CityList'

class Header extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      city: props.currentCity.city,
      focused: false,
    }
  }
  cityHandler = (event) => {
    this.setState({
      city: event.target.value
    });
  }
  showCityList() {
    if(this.state.focused) {
      return <CityList city={this.state.city}/>;
    }

    return null
  }
  onFocusHandler = () => {
    this.setState({
      focused: true
    });
  }
  onBlurHandler = () => {
    setTimeout(() => {
      this.setState({
        focused: false
      });
    }, 1000);
    
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      city:nextProps.currentCity.city
    });
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
             onChange={(e) => this.cityHandler(e)} 
             onFocus={(e) => this.onFocusHandler()}
             onBlur={(e) => this.onBlurHandler()}/>
             {this.showCityList()}
          </div>
          
          <div className="sm-four columns current-city-weather">
            <i className={"wi " + weatherType(weather.weather[0].id, icons)}></i>
          </div>
          
          <div className="sm-four columns current-city-temp">
            <h2>{formatTemperature(weather.main.temp)}<sup>o</sup>C</h2>
          </div>
          
          <span className="current-city-day">{Moment(weather.dt_txt).format('dddd')}</span>
          
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
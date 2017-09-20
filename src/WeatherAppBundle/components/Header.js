import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Header extends Component {
  render() {
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
            <h2>18<sup>o</sup>C</h2>
          </div>
          
          <span className="current-city-day">Sun</span>
          
        </div>
      </header>
    )
  }
}

export default Header
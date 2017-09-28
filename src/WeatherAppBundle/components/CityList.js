import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeCity } from '../AC'

function CityList({city, dispatch, cities, onClickHandler}) {
  return (
    <ul className="city-list">
      {cities.map((el, i) => {
        return <li key={i} onClick={(e) => {
          dispatch(changeCity(el.id))
        }
      }>{el.city}</li>
      })}
    </ul>
  )
}

CityList.propTypes = {
  
}

export default connect((state, ownProps) => {

  let cities = [];
  for(let i in state.cities) {
    if(state.cities[i].city.toLowerCase().search(ownProps.city.toLowerCase()) + 1 && cities.length < 5) {
      cities.push(state.cities[i])
    }
  }
  return {
    cities
  }
})(CityList)
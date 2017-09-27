import { combineReducers } from 'redux';
import currentCity from './currentCity'
import cities from './cities'
import weather from './weather'
import currentWeather from './currentWeather'

export default combineReducers({
  currentCity,
  cities,
  weather,
  currentWeather
})
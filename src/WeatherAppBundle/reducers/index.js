import { combineReducers } from 'redux';
import currentCity from './currentCity'
import cities from './cities'
import weather from './weather'

export default combineReducers({
  currentCity,
  cities,
  weather
})
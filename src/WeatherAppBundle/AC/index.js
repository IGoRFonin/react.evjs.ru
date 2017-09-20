import { CHOOSE_CITY, LOAD_16_WEATHER, APPID, START, SUCCESS, ERROR, CURRENT_WEATHER_LOAD } from '../constants'
import fetch from 'isomorphic-fetch';

export function changeCity(id) {
  return {
    type: CHOOSE_CITY,
    payload: { id }
  }
}

export function loadWeather(id) {
  return {
    type: LOAD_16_WEATHER
    payload: { id },
    callAPI: `http://api.openweathermap.org/data/2.5/forecast/daily?id=${id}&APPID=${APPID}`
  }
}

export function loadCurrentWeather(id) {
  return {
    type: CURRENT_WEATHER_LOAD,
    payload: { id },
    callAPI: `http://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=${APPID}`
  }
}
import { CHOOSE_CITY, LOAD_WEATHER, 
  APPID, START, 
  SUCCESS, ERROR, 
  CHANGE_DAY } from '../constants'
import fetch from 'isomorphic-fetch';

export function changeCity(id) {
  return {
    type: CHOOSE_CITY,
    payload: { id }
  }
}

export function loadWeather(id) {
  return {
    type: LOAD_WEATHER,
    payload: { id },
    callAPI: `http://api.openweathermap.org/data/2.5/forecast?id=${id}&APPID=${APPID}`
  }
}

export const changeDay = (time) => {
  return {
    type: CHANGE_DAY,
    payload: { time }
  }
}
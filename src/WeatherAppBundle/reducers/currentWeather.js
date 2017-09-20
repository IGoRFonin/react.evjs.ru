import { CURRENT_WEATHER_LOADED } from '../constants.js'

export default function(state = {}, action) {

  switch(action.type) {
    case CURRENT_WEATHER_LOADED:
      return action.payload
  }
  return state;
}
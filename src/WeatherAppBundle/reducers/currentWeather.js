import { CURRENT_WEATHER_LOAD, SUCCESS } from '../constants.js'

export default function(state = {}, action) {

  switch(action.type) {
    case CURRENT_WEATHER_LOAD + SUCCESS:
      return action.payload
  }
  return state;
}
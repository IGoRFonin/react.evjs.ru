import { CHOOSE_CITY } from '../constants'

export default function(state = 2643743, action) {

  switch(action.type) {
    case CHOOSE_CITY:
      return action.payload.id
  }
  return state;
}
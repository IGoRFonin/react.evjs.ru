import { LOAD_WEATHER, SUCCESS, CHANGE_DAY } from '../constants.js'
let time = new Date();
time.setHours(0);
time.setMinutes(0);
time.setSeconds(0);
time.setMilliseconds(0);

const secs = time.getTime();

export default function(state = secs, action) {

  switch(action.type) {
    case LOAD_WEATHER + SUCCESS:
      return state;
    case CHANGE_DAY:
      return action.payload.time;
  }
  return state;
}
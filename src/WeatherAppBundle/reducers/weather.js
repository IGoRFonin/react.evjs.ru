import { LOAD_WEATHER, SUCCESS } from '../constants'

export default function(state = {}, action) {
  
  switch(action.type) {
    case LOAD_WEATHER + SUCCESS:
    return parseWeather(action.res.list);
  }
  return state;
}

function parseWeather(list) {
  let obj = {};

  list.forEach((el, i) => {
    let time = new Date(el.dt_txt);
    time.setHours(0);
    obj[time.getTime()] = {};
  });

  list.forEach((el, i) => {
    let time = new Date(el.dt_txt);
    time.setHours(0);

    let timeD = new Date(el.dt_txt);

    obj[time.getTime()][timeD.getTime()] = el;
  });

  return obj;
}
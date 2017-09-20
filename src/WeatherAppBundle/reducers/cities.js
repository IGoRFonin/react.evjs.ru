import { arrToMap } from '../helper'
const cities = require('../cities.json');

export default function(state = arrToMap(cities), action) {
  return state;
}
export function arrToMap(arr) {
  return arr.reduce((acc, el) => {
    acc[el.id] = el;

    return acc;
  }, {})
}

export function formatTemperature(temp) {
  if(temp > 120) {
    return (++temp - 273.15).toFixed(0);
  }

  return temp;
}

export function getMidTemperature(day) {
  var arr = Object.keys(day)

  if(arr.length === 1) {
    return day[arr[0]]
  } 
  
  return Number.isInteger(arr.length / 2) ? 
    day[arr[(arr.length / 2) - 1]] : 
    day[arr[((arr.length - 1) / 2) - 1]];
}
export function arrToMap(arr) {
  return arr.reduce((acc, el) => {
    acc[el.id] = el;

    return acc;
  }, {})
}

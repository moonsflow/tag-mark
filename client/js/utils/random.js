export function integer(min, max) {
  const minValue = (typeof max !== 'undefined') ? parseInt(min, 10) : 0;
  const maxValue = (typeof max !== 'undefined') ? parseInt(max, 10) : parseInt(min, 10);
  return parseInt((Math.random() * (maxValue - minValue)) + minValue, 10);
}

export function float(min, max) {
  const minValue = (typeof max !== 'undefined') ? parseFloat(min, 10) : 0;
  const maxValue = (typeof max !== 'undefined') ? parseFloat(max, 10) : parseFloat(min, 10);
  return Math.random() * (maxValue - minValue) + minValue;
}

export function bool(likelihood = 0.5) {
  return !!Math.random() < likelihood
}

export function pick(array) {
  return array[integer(array.length)];
}

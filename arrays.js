var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, s) {
  var array = [s, ...arr]
  return array;
}

function destructivelyAddElementToBeginningOfArray(arr, s) {
  var array = arr;
  array.unshift(s);
  return array;
}

function addElementToEndOfArray(arr, s) {
  var array = [...arr, s];
  return array;
}

function destructivelyAddElementToEndOfArray(arr, s) {
  var array = arr;
  array.push(s);
  return array;
}

function accessElementInArray(arr, i) {
 return arr[i];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  var array = arr;
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(arr) {
  var array = arr;
  array.slice(1);
  return ...arr;
}

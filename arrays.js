var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, s) {
  var array = [s, ...arr]
  return array;
}

function destructivelyAddElementToBeginningOfArray(arr, s) {
  var array = arr.unshift(s);
  return array;
}

function addElementToEndOfArray(arr, s) {
  var array = [...arr, s];
  return array;
}

function destructivelyAddElementToEndOfArray(arr, s) {
  var array = arr;
  return array.push(s);
}

function accessElementInArray(arr, i) {
 return arr[i];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  var array = arr;
  return array.shift();
}

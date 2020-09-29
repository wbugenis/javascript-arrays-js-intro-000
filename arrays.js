var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, s) {
  return var array = [s, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, s) {
  var array = arr;
  return array.unshift(s);
}

function addElementToEndOfArray(arr, s) {
  var array = arr;
  return array.push(s)
}

function destructivelyAddElementToEndOfArray(arr, s) {
  var array = arr;

  return array;
}

function accessElementInArray(arr, i) {
 return arr[i];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  return array.shift();
}

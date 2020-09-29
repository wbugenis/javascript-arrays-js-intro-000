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
  var array = arr
  return array.push(s)
}

function destructivelyAddElementToEndOfArray(arr, s) {
  arr.last() = s;
  return arr;
}

function accessElementInArray(arr, i) {
 return arr[i];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  return array.shift();
}

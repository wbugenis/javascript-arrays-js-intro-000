var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, s) {
  var array = [s, ...arr]
  return array;
}

function destructivelyAddElementToBeginningOfArray(arr, s) {
  var array = arr.shift();
  array.unshift(s);
  return arr;
}

function addElementToEndOfArray(arr, s) {
  return arr.push(s)
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

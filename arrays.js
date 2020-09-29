var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, s) {
  arr.unshift(s);
}

function destructivelyAddElementToBeginningOfArray(arr, s) {
  arr = arr.shift();
  arr.unshift(s);
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

let numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
function double(num) {
  return num * 2;
}

const doubled = numbers.map(double);

console.log(doubled);
//Filter - Create a new array by keeping the items that return true.
const greaterThan10 = numbers.filter(function (num) {
  return num > 10;
});

console.log(greaterThan10);

//Reduce - Accumulate a value by doing something to each item in an array.
let newNumber = numbers.reduce(function (accumulator, number) {
  return accumulator * number;
});

console.log(newNumber);

//Find - find the first item that matches from an array.
let firstGreaterThan10 = numbers.find(function (number) {
  return number > 10;
});

console.log(firstGreaterThan10);

//FindIndex - find the index of the first item that matches.
let firstGreaterThan10Index = numbers.findIndex(function (number) {
  return number > 10;
});

console.log(firstGreaterThan10Index);

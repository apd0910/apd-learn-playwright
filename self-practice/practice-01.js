const { it } = require("node:test");

let fruits = ["apple", "banana", "cherry"];

fruits.forEach(function(item) {
  console.log(item);
});
// Output: apple, banana, cherry

fruits.forEach(function(item, index, arr) {
  console.log(typeof(item))
  console.log(typeof(index))
  console.log(typeof(arr))
  console.log(`Item: ${item}, Index: ${index}, Array: ${arr}`);
});

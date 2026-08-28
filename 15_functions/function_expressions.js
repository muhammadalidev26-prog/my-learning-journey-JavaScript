"use strict"

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function(element) {return Math.pow(element,2)});
const cubes = numbers.map(function(element) {return Math.pow(element, 3)});
const evenNums = numbers.filter(function(element) {return element % 2 === 0});
const oddNums = numbers.filter(function(element) {return element % 2 !== 0});

console.log("Each item of an array raised to power of 2");
console.log("Before Squaring", numbers);
console.log("After Squaring", squares);

console.log("Each item of an array raised to power of 3");
console.log("Before Cubing", numbers);
console.log("After Cubing", cubes);

console.log("Filtering out all odd numbers");
console.log(evenNums);

console.log("Filtering out all even numbers");
console.log(oddNums);

// Creating the function in the middle of 
let value = "Created a function inside another expression";
// setTimeout(function() {console.log(value)}, 3000); // setTimeout performs a action after the given miliseconds (3000 = 3s)


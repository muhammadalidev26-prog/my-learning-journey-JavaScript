// Array - store ordered collection

let fruits = [
  'apple',
  'banana',
  'watermelon',
];

// indexing
console.log( fruits[1] ) // banana

// replace
fruits[1] = 'pomegranate';
console.log( fruits )

// or add new one
fruits[fruits.length] = 'mango'
console.log( fruits )

// get last element with array.at( index ) 
console.log( fruits.at(-1) ) // fruits[-1] doesn't work in js

// We can also use new Arra() constructor to create an array but it comes with problems

let newArray = new Array( 5 ); // creates an array with 5 empty slots
console.log( newArray, newArray.length ) // [ <5 empty items> ] 5

// but if we pass multiple values it creates an array with those values
let newArray2 = new Array( 1, 2, 3 ); // creates an array with 3 elements
console.log( newArray2, newArray2.length ) // [ 1, 2, 3 ] 3

// arrays can have array childs to create multi-dimensional arrays
let multiDimensionalArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log( multiDimensionalArray[1][2] ) // 6
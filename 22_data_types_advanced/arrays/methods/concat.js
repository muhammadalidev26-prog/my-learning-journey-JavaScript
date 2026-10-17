import { separator } from "../../../separator.js";

// arr.concat( arg1, arg2, ...)
// It returns a new array combining other arrays

let arr1 = [1, 3, 5]
let arr2 = [2, 4, 6]
let arr3 = [7, 8, 9]

arr1 = arr1.concat(arr2, arr3);
arr1.sort(); // sorting the array is right order
console.log( arr1 );

separator();

// Normally it copies elements from an array but for other objects are added as whole
let obj = {
  0: 'jake',
  length: 1
}

console.log( arr1.concat( obj ) ); 

separator()
// but an array-like object can have a special "Symbol.isConcatSpreadable" property then it's treated as a array by concat
obj = {
  0: 'jake',
  1: 'person',
  length: 3,
  [Symbol.isConcatSpreadable]: true
}

console.log(arr2)
console.log( arr2.concat(obj))
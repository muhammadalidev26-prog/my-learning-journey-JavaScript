import { separator } from "../../separator.js"
// Length Property
// The length property automatically updates once we make any changes to the array
// It's actually not the length of the array but ( highest index in array + 1)

let arr1 = [0, 1, 2, 3, 4];
console.log( arr1.length ); // 5

// for instance a single element with a large index gives a large length
let arr2 = [];
arr2[100] = 'atIndex100';
console.log( arr2.length ); // 101

separator();

// and we can manually set the length property to truncate the array
let arr3 = [0, 1, 2, 3, 4];
console.log( arr3.length ); // 5
arr3.length = 3;
console.log( arr3 ); // [0, 1, 2]

// but if we increase the length property it doesn't add any new elements to the array, it just changes the length property1
arr3.length = 100;
console.log( arr3.length, '<- length, array ->', arr3)

separator();

console.log( 'we can clear an array by setting it\' length to', arr3.length = 0, arr3);
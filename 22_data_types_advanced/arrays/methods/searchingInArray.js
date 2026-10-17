import { separator } from "../../../separator.js";
/* 
indexOf/lastIndexOf and includes

The methods arr.indexOf and arr.includes have the similar syntax and do essentially the same as their string counterparts, but operate on items instead of characters:

    arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
    arr.includes(item, from) – looks for item starting from index from, returns true if found.
*/

let arr = [1, 0, false];

console.log( arr.indexOf(0) ); // 1
console.log( arr.indexOf(false) ); // 2
console.log( arr.indexOf(null) ); // -1

console.log( arr.includes(1) ); // true

separator()

// The method arr.lastIndexOf is the same as indexOf, but looks for from right to left.

let fruits = ['Apple', 'Orange', 'Apple']

console.log( fruits.indexOf('Apple') ); // 0 (first Apple)
console.log( fruits.lastIndexOf('Apple') ); // 2 (last Apple)

separator()
// A minor, but noteworthy feature of includes is that it correctly handles NaN, unlike indexOf:

const arr1 = [NaN];
console.log( arr1.indexOf(NaN) ); // -1 (wrong, should be 0)
console.log( arr1.includes(NaN) );// true (correct)

separator()

// Imagine we have an array of objects. How do we find an object with a specific condition?
// Here the arr.find(fn) method comes in handy.
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);

console.log(user.name); // John
separator()
// The arr.findIndex method has the same syntax but returns the index where the element was found instead of the element itself. The value of -1 is returned if nothing is found.
users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: "John"}
];

// Find the index of the first John
console.log(users.findIndex(user => user.name == 'John')); // 0

// Find the index of the last John
console.log(users.findLastIndex(user => user.name == 'John')); // 3

separator();

// The find method looks for a single (first) element that makes the function return true.
// If there may be many, we can use arr.filter(fn).
// The syntax is similar to find, but filter returns an array of all matching elements:
users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

console.log(someUsers.length); // 2
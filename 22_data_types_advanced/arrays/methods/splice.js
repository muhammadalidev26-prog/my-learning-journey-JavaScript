import { separator } from '../../../separator.js'
// array.Splice()
// It deletes an element from an array

// typical delete
let arr = ['jake', 'paul', 'mike', 'tyson'];
delete arr[0];

console.log( arr.length ) // 4 [undefined, 'paul', 'mike', 'tyson'] - It doesn't remove it

separator();

// arr.splice(start[, deleteCount, elem1, ..., elemN])
// It removes

arr = ['a', 'b', 'c', 'd']
console.log(arr.splice(1, 2)) // from index 1 remove 2 elements
console.log(arr);

separator();

// Removing elements and replacing them with other elements
arr = [ "let's", "learn", "javscript", "right", "now"];
console.log(arr)
console.log(arr.splice(1, 2, 'dance'))
console.log(arr)

// just inserting elements
arr.splice(arr.length, 0, '-- Just kidding', 'Nobody', 'is', 'gonna', 'dance', 'hehe') // deleteCount is 0 so no elements would be harmed
console.log(arr)
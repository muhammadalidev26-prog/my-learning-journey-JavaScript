
// isArray()
// We can't distinguish between array and an object via typeof so there is a separate function for that

let arr = [];
let obj = {};

console.log( typeof arr ) // Object
console.log( typeof obj ) // 0bject

console.log( Array.isArray(arr) ) // True
console.log( Array.isArray(obj) ) // False


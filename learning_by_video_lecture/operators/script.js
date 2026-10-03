
// Arithmetic, comparison, logical, assigment, unary, ternary


// instanceof - check if a object was created by a specific class or constructore
let array = [1, 2, 3, 4, 5];
console.log( typeof array); // Object
console.log( array instanceof Array) // true

let score = 78;

let grade = score>= 90 ? 'A' : score >= 75 ? 'B' : score >= 60 ? 'C' : 'Fail';

console.log(grade)


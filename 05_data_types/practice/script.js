// Data Types --> Divided into two types 'Primitives' and 'References'
// Primitives - Aise saare values jinko copy karne par tum ko real copy mil jaye
// strings, integers, bitint, null, undefined, boolean, symbol

let num1 = 12;
let num2 = num1; // It would pass the value not the refernce to value

console.log(num1, num2)
num1++;
console.log(num1, num2)



// References - Inko copy karne par real copy nahin mile gi but aap ko reference mile ga parent ka
// arrays, objects, functions

let array1 = [1, 2, 3, 4, 5];
let array2 = array1; // It would just pass refernce to value not the value itself

// Dynamic Typing
// There is Static typing in Js but Dynamic Typing instead, which means you can change dataType
let string = 'jake';

console.log(string)
string = 12;
console.log(string)

console.log(typeof string)


// Checkout the Notes of JavaScript (everywhere)
// Is there a replacement of CSS in future or not

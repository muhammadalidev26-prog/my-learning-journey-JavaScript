// Numbers
// it represents both integer and floating point numbers
// Infinity, -Infinity & NaN

let num1 = 14;
let num2 = 9.9998;

console.log(num1 + num2);

// Infinity & -Infinity

let infinity_value = 1/0;
console.log(infinity_value);

// or

console.log(Infinity - Infinity); // NaN

// Negative Infinity
console.log(-Infinity);

// NaN
// It represents computational error. It is a results of undefined or incorrect mathematical calculation.

console.log("why are you gay" - 10); //NaN

// or

console.log(10 * NaN); // NaN

// However, there is an exception

console.log(NaN ** 0);
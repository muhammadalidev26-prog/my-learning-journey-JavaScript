"use strict"

// BigInt
// In JavaScript, the "number" type can't be precise about number greater than 2^53-1 or less than -(2^53-1)

// Adding 3, 4 and 5 to the number gave the same result when they should be different
// That's where we use BigINt

let large_number = 19007199254740992;

console.log(large_number + 2);
console.log(large_number + 3);
console.log(large_number + 4);
console.log(large_number + 5);

// Line Break

console.log("-----------------------------------------------------------------------------------------------------------------------------");

// We write bigInt number with 'n' at the end
let bigInt = 19007199254740992n;

console.log(bigInt + BigInt(2));
console.log(bigInt + BigInt(3));
console.log(bigInt + BigInt(4));
console.log(bigInt + BigInt(5));
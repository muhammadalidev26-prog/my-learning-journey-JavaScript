"use strict"

// Converting other datatypes into strings

let value = true;
console.log(typeof value); // boolean

value = String(value); // now value is a string "true"
console.log(typeof value); // string

// String conversion is mostly obvious, a false becomes "false" and 10 becomes "10", etc.

let num = 10;
console.log(num, typeof num);

num = String(num);
console.log(num, typeof num);
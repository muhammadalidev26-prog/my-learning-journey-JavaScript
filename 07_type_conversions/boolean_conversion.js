"use strict"

// Boolean converison
/* 
Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
Other Values Become Fasle
*/



console.log( 1, Boolean(1) ); // true
console.log( 0, Boolean(0) ); // false

console.log( '"hello"', Boolean("hello") ); // true
console.log( '""', Boolean("") ); // false

// A String with 0 is also True (in js every non-empty string is true)
console.log('"0"', Boolean("0")); // true

console.log(undefined, Boolean(undefined));
console.log(NaN, Boolean(NaN));
console.log(null, Boolean(null));
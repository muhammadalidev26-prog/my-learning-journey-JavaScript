"use strict"

// Number conversions
// Numeric conversion in mathematical functions and expressions happens automatically.

console.log('10' / '2');

// We can use the Number(value) function to explicitly convert a value to a number:

console.log(Number('10') / Number('2'));


console.log('"   123   "', Number("   123   ") ); // 123
console.log('"123z"', Number("123z") );      // NaN (error reading a number at "z")
console.log( true, Number(true) );        // 1
console.log( false, Number(false) );       // 0
console.log( null, Number(null) );       // 0
console.log( undefined, Number(undefined) );       // 0

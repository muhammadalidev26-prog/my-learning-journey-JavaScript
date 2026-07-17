"use strict"

/*

Comparisons

We know many comparison operators from maths.

In JavaScript they are written like this:

  Greater/less than: a > b, a < b.
  Greater/less than or equals: a >= b, a <= b.
  Equals: a == b
  Strict Equality (checks type and data strictly): a === b

*/

console.log("------------------------------------------------Basic Comparison------------------------------------------------");

console.log("10 == 10.00", 10 == 10.00);

// Strict Equality (===) - Compares value and data type
console.log('10 === "10"', 10 === "10");   // false (number vs string)

// Loose Equality (==) - Converts types before comparing
console.log('10 == "10"', 10 == "10");    // true (string "10" is converted to number 10)
console.log('0 == false', 0 == false);    // true (false is converted to 0)

// Strict Inequality (!==)
console.log('10 !== "10" ', 10 !== "10");   // true (types are different)

// Loose Inequality (!=)
console.log('10 != "10"', 10 != "10");    // false (values are considered the same)

let x = 25;
let y = 20;

// Greater than (>) and Less than (<)
console.log("x(25) > y(20)", x > y);   // true
console.log("x(25) < y(20)", x < y);   // false

// Greater than or equal to (>=) and Less than or equal to (<=)
console.log('x(25) >= y(20)', x >= 15); // true
console.log('x(25) <= y(20)', y <= 20); // true


// String Comparison
// String comparison works by comparing first letters of both strings and moving on until last one if the compared letters are same.

console.log("------------------------------------------------String Comparison------------------------------------------------");

console.log('Ajmal > Roshan', 'Ajmal' > 'Roshan') // false R is greater than A so comparison stops at first letter and Ajaml Roshan wins
console.log('Glow > Glee', 'Glow' > 'Glee' ); // true G and l or same and 'o' is greater than 'e', so Glow Wins
console.log('Bee > Be', 'Bee' > 'Be' ); // true If all the letters are same then the longer string wins
console.log('Ajmal > Ajmal', 'Ajmal' > 'Ajmal'); // if two strings are completely same then the false is returned

console.log('"A" is not same as "a" and if you compare them then the lowercase "a" wins, "a" > "A"', "a" > "A");


console.log("------------------------------------------------A Funny Consequence------------------------------------------------");

let zero = 0;
console.log('Boolean(zero) -> Boolean(0)', Boolean(zero) ); // false

let zero2 = "0";
console.log('Boolean(zero2) -> Boolean("0")', Boolean(zero2) ); // true

console.log("zero == zero2 -> 0 == '0'", zero == zero2); // true!

/*

An equality check converts values using the numeric conversion (hence "0" becomes 0), while the explicit Boolean conversion uses another set of rules.

*/


console.log("------------------------------------------Comparison with Null & Undefined------------------------------------------");
console.log("null == undefined", null == undefined); // true
console.log("null === undefined", null === undefined); // false

console.log("for comparisons, Null is converted to 0 and Undefined is converted to NaN");

console.log("null > 0, 0 >0:", null > 0);  // false (0 > 0 is false)
console.log("null < 0, 0 < 0:", null < 0);  // false (0 < 0 is false)
console.log("null >= 0, 0 >= 0:", null >= 0); // true  (0 >= 0 is true)
/*
The null == 0 vs null >= 0 Paradox: > You might notice that null == 0 is false, but null >= 0 is true. This happens because equality (==) and comparisons (>=) follow completely different specification rules in JavaScript. Comparison operators convert null to 0, while equality operators do not.
 */

console.log("Because undefined converts to NaN for comparisons, it always returns false")
console.log("undefined > 0 :", undefined > 0);  // false
console.log("undefined < 0 :", undefined < 0);  // false
console.log("undefined >= 0 :", undefined >= 0); // false
console.log("undefined <= 0 :", undefined <= 0); // false

console.log("Undefined Equality test");
console.log("undefind == 0", undefined == 0); // Returns false because undefined only equals undefined and null
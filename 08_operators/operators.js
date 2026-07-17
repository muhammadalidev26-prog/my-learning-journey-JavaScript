"use strict"

// Operators
/*

TERMS: Unary, Binary, Operand

Operand 
  An operand is an input to an operator (like in 10 + 5, 10 & 5 are operands)

Unary
  A unary operator performs an action on only a single operand.

Binary
  A binary operator requires two separate operands to execute its logic. If you omit one, JavaScript will throw a syntax error.

*/

// Unary Minus ( - )
// Changes the number from positive to negative
console.log("-----------------------Unary Plus / Unary Minus-----------------------------------------------")

let num1 = 10;
let num2 = -num1;
console.log(num1, "-->num1 num2<--" ,num2);

// Unary Plus (+)
// converts string to Number
let num3 = "10";
let num4 = +num3; // it converts the string to Number, it functions same as Number(num3) but is shorter
console.log(num3, num4);

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
console.log( +apples + +oranges ); // 5
// why does it convert the strings to number before adding them, that's because of operator precendence and unary has the highest precendence in js

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5


// Increment / Decrement
console.log("-----------------------Increment/Decrement-----------------------------------------------")

let num5 = 10;
console.log(`before increment ${num5}`);
num5++;
console.log(`after increment ${num5}`);

let num6 = 20;
console.log(`before decrement ${num6}`);
num6--;
console.log(`after decrement ${num6}`);

// Prefix
// It increments the value and returns it

let age = 16;

console.log(age++); // 16
console.log(age); // 17

// Postfix / Suffix
// Returns the current value first, then increments.



// Basic Operators
console.log("-----------------------Basic Operators-----------------------------------------------")

let students = 30;

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 1.5
// students = students ** 2;
let extraStudents = students % 7;
console.log(extraStudents);

// Augmented Assigment Operators
console.log("-----------------------Augmented Assigment Operators-----------------------------------------------")

students += 1;
students -= 1;
students *= 1.5 // 45

students++; // 46
console.log(students);
students--; // 45

console.log(students);
console.log(extraStudents);


// String concatenation
// If the Binary is applied to Strings, it merges (concatenates them)
console.log("-----------------------String concatenation-----------------------------------------------")

let firstName = "muhammad ";
let middleName = "ali ";
let lastName = "samejo";

console.log(firstName + middleName + lastName);

// If any of the operands is string, the other one is also converted to string
console.log( '1' + 2 ); // "12"
console.log( 2 + '1' ); // "21"

// Here's a more complex example
console.log(2 + 2 + "2"); // 42 not 222
console.log("2" + 2 + 2); // 222 not 24

// NOTE: '+' operator is the only operator that supports such operations
console.log('name' - 'na'); // Nan

// and they convert the string to number before performing the operation, e.g
console.log('10' - 2); // '10' is first converted to Number and then 2 is subtracted from it


// Assigment
/* 
The Assigment operator '=' has very low precedence. That’s why, when we assign a variable, like x = 2 * 2 + 1, the calculations are done first and then the = is evaluated, storing the result in x.
*/

console.log("-----------------------Assigment Operators-----------------------------------------------")

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

console.log( a ); // 3
console.log( c ); // 0

// Bitwise Operators
// These work with number as if they are 32 bit integer numbers, these are rarely used and if you ever need them just go to Bitwise Operators Chapter on MDN

console.log("-----------------------Coma-----------------------------------------------")
// Coma
// We use coma to seperate expressions, every expression is evaluated but only value of last one is returned
for (a = 1, b = 3, c = a * b; a < 10; a++) {

};

let newNum = (1 + 2, 3 + 4);

console.log( newNum ); // 7 (the result of 3 + 4)

"use strict"

// Logical Operators




// || OR
// || OR operator is used to find true
// Evaluates operands from left to right.
// For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were false), returns the last operand.
// It returns operand without converting it into Boolean so 1 || 0 would return 1 not true but you can get true by saying Boolean(1 || 0)

console.log("true || true", true || true );   // true
console.log("false || true", false || true );  // true
console.log("true || false", true || false );  // true
console.log("false || false", false || false ); // false

console.log("If an operand isn't boolean then it is converted to boolean")
console.log("1 || 0", Boolean(1 || 0)) // true, 1 is converted into true and 0 is converted into false

// Getting the first truthy value from a list of variables or expressions.
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log( firstName || lastName || nickName || "Anonymous"); // SuperCoder

// Short-circuit
// It means that || would stop as soon as it finds first true value and ignores the rest of the values
// It ignores the side effects (side effect means a code that actually does something when run)

console.log(true || "Side Effect");
// sometimes people use this to execute a command only if a condition is falsy


// && AND
// And returns true if both operands are truthy and false otherwise

if ("message" && "message" > "apple") {
  console.log("Right")
} else {
  console.log("Wrong")
}


// ! NOT
// NOT converts a value into Boolean and returns the inverse
console.log(!true);
console.log(!null);

// Sometimes !! is used to convert a value into boolean
console.log(!!"butterfly", !!0);

/*
The Precedence Order is as follows:
NOT !
AND &&
OR ||
*/
"user strict";

// Optional Chaining '?.'
// When you try to access a property that doesn't exist, the optional chaining comes in handy
let user = {};

// Error.
// console.log( user.address.street ) // Error.., address is undefined and you can't get a property from undefined

// Undefined
console.log( user.address?.street ) // No Error.

// NOTE: the Variable must be declared, otherwise it would return an error
let personalInfo;
console.log( personalInfo?.email?.password ) // Error, personalInfo not declared

// Short Circuiting
// If a value doesn't exist the circuit shots and doesn't reach the end
let user02 = null;
let x = 0;

user02?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++
console.log(x); // 0, value not incremented


// Other Variants
// The optional chaining ?. is not an operator, but a special syntax construct, 
// that also works with functions and square brackets.
let userAdmin = {
  admin() {
    console.log("I am admin");
  }
};

let userGuest = {};

userAdmin.admin?.(); // I am admin
userGuest.admin?.(); // nothing happens (no such method)











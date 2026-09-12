"use strict";

let number = 10.2;

if (!Math.trunc) {
  // if no such function
  Math.trunc = function (number) {
    // Math.ceil and Math.floor exist even in ancient JavaScript engines
    // they are covered later in the tutorial
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  };
  console.log("Original Math.trunc function");
  console.log(Math.trunc(Number));
} else {
  console.log("Created Math.trunc function manually");
  console.log(Math.trunc(number));
}

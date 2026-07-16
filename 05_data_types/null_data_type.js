"use strict"

// Null
// The special null value does not belong to any of the types described above.
// It forms a separate type of its own which contains only the null value:

let age = null;
console.log(age);
console.log(typeof age); // It returns the Object which is a bug in Js since 1995 but aside from that Null is a legitimate data type in JavaScript


// Basic Js Function 

function jake(x) {
  console.log(x);
}

// Undefined not NULL
console.log(jake("person")); // Undefined

// works fine
jake("person"); // person
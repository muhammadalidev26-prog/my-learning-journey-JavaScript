"use strict"

// undefined
// The meaning of undefined is "value not assigned"

// Declaring a variable without giving it any value
let person;

console.log(person) // undefined

// You can also assign undefined to a variable, like

let height = undefined;

console.log(height) // undefined

/* …But we don’t recommend doing that. Normally, one uses null to assign an “empty” or “unknown” value to a variable
 while undefined is reserved as a default initial value for unassigned things. */
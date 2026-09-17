"use strict";

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

console.log( user.ref.name ); // What's the result?

// The Result will be an error, explanation below

/*

An object literal like { name: "John", ref: this } does not create a scope for this.

When JavaScript runs makeUser(), it executes the code line by line:

    It evaluates this before the object is even created.

    Because makeUser() was called directly as makeUser(), this belongs to the outer scope (the global window or undefined in strict mode).

    It sets ref to that global scope.

    Finally, it creates and returns the object.

So ref never points to { name: "John" } — it points to the whole window/global context.

*/


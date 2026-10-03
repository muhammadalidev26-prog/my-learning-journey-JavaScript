"use strict";

// Only Two Primitive Types can serve as Object Keys: Strings and Symbol;
// If we use other data-types those are converted into string;

let symbol = Symbol('jake');

let nameDetails = {
  [symbol]: 'person',
  age: 18,
  height: '5\'9',
  1.8: 'jake'
}

console.log(nameDetails);

// Symbols are unique
let a = Symbol();

// We often give description to symbols inside the bracket;
let b = Symbol("person");

// We can access hidden properties via the symbol Key
let user = { // belongs to another code
  name: "John"
};

let id = Symbol("id");
console.log(id)
console.log(user)
user[id] = 1;
console.log(user)
console.log( user[id] ); // we can access the data using the symbol as the key











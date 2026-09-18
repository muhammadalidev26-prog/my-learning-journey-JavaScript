"use strict";

// Constructors in javaScript
// A constructor functions always starts with Capital letter
// It should always be used with new operator

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

// Incorrect, not used with new operator
// let user001 = new User('Ahmed Ali');
// console.log(user001);

// Correct
let user002 = new User('Bahadur Ali');

console.log(user002);

function jake() {
  if (new.target) {
    return this.name = 'jake'
  }
  return 'not used with new'
}

// person would become an object
let person = new jake();
console.log(person)

// would become a string containing "not used with new"
let person2 = jake();
console.log(person2);



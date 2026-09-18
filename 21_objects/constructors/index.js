"use strict";

// Constructors in javaScript
// A constructor functions always starts with Capital letter
// It should always be used with new operator

function User(name) {
  this.name = name;
  this.isAdmin = false;
  this.sayHi = function() {
    return `Hi ${this.name}`
  }
}

// Incorrect, not used with new operator
// let user001 = new User('Ahmed Ali');
// console.log(user001);

// Correct
let user002 = new User('Bahadur Ali');

console.log(user002);

let hiMessageByuser002 = user002.sayHi();
console.log(hiMessageByuser002)

function jake() {
  if (new.target) {
    return this.name = 'jake'
  }
  return 'not used with new'
}

// person would become an object
let person = new jake();
console.log(person) // persosn would become and jake

// would become a string containing "not used with new"
let person2 = jake();
console.log(person2);


function manualNew(object) {

  if (!new.target) {
    console.log('initilizing manualNew() function')
    return new manualNew()
  } else if (new.target) {
    let result = 'return jake';
    console.log(result)
  }

}

let personPerson = new manualNew() // return jake


// If we have many lines of code all about creation of a single complex object, 
// we can wrap them in an immediately called constructor function, like this:
let user003 = new function() {
  this.name = 'Person tall';
  this.age = 18.33;

  // ... other code for user003 execution
  // maybe some local variables, complex logic and conditionals.
}
// this constructor can't be called again because it isn't saved anywhere.
// It's just made and called. This trick encapsules the constructor





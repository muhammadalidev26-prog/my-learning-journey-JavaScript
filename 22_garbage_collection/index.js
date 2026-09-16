"use strict";

// Garbage Collection
// Memory management in JavaScript is performed automatically and invisibly to us.
//  We create primitives, objects, functions… All that takes memory.

// 'person' variable is referencing to an object in memory.
let person = {
  name: 'jake',
  age: 38,
  height: '5 feet 9 inches'
}

// If a overwrite the value of person there would be no reference to the object,
//  so JavaScript Garbage Collectors will junk the data and free the memoryy 
person = 'jake' // Reference to object lost, hence the object would be junked.

// Complex Example

function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman
  }
}

let family = marry({
  name: "John"
}, {
  name: "Ann"
});

// console.log(family);

// Removing two references
delete family.father;
delete family.mother.husband;

console.log(family)
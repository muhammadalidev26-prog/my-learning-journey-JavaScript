"use strict";

// there are two kinds of object properties
// data properties, all properties we've been working with are data properties
// accessor properties, functions that execute on getting or setting a value

function stringify(obj) {
  return JSON.stringify(obj, null, 2)
}

let user = {
  firstName: "John",
  lastName: "Smith"
}

// now to set a fullName property we would use getter to avoid copy-pasting existing values and use accessor property

Object.defineProperty(user, "fullName", {
    get() {
      return `${this.firstName} ${this.lastName}`
    },
    enumerable: true,
    configurable: true
  }
)
console.log( stringify(user) )

// user.fullName = "Test" // error, property only has getter

// let's add setter for fullName

Object.defineProperty( user, "fullName", {
  set(value) {
    [this.firstName, this.lastName] = value.split(" ")
  }
})

user.fullName = "Jane Doe";

console.log( stringify( user ) )

// an accessor property has different descriptors from data properties
/**
get – a function without arguments, that works when a property is read,
set – a function with one argument, that is called when the property is set,
enumerable – same as for data properties,
configurable – same as for data properties.
*/


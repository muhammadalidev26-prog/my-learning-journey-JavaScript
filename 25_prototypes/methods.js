
// Setting or reading the prototype with obj.__proto__ is considered outdated 

// Modern methods are:
// Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
// Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto.

// The only usage of __proto__, that’s not frowned upon, is as a property when creating a new object: { __proto__: ... }.

let person = {
  userID: Symbol('ID'),
  isAdmin: false
}

// __proto__ is fine here
let obj = {
  __proto__: person,
}

// but there is a better way to do the same thing
// Object.create(proto[, descriptors]) – creates an empty object with given proto as [[Prototype]] and optional property descriptors.

// we can also set properties to the new object, like this:
let obj2 = Object.create( person, {
  isAdmin: {
    value: true,
    enumerable: true, // appears in iteration
    writable: false,
    configurable: false // can not delete or modify the property
  }
} )

console.log( obj2.isAdmin ) // false

console.log ( Object.getPrototypeOf( obj2 ) === person ) // true

Object.setPrototypeOf( obj2, {} ) // setting the prototype of obj2 to to {}

console.log( Object.getPrototypeOf( obj2 ) === person ) // false

// we can use Object.create to clone any object from it's prototype to all propertites ( even enumerable ones )

let obj3 = Object.create(
  Object.getPrototypeOf( person ), Object.getOwnPropertyDescriptors( person )
)


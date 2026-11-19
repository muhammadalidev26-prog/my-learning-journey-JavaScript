"use strict";

function stringify( descriptor ) {
  return JSON.stringify(descriptor, null, 2)
}

let obj = {
  name: "jake",
  age: 18
}
// Object properties, besides a value, have three special attributes (so-called “flags”):
/**
writable – if true, the value can be changed, otherwise it’s read-only.
enumerable – if true, then listed in loops, otherwise not listed.
configurable – if true, the property can be deleted and these attributes can be modified, otherwise not
. */

// Getting those flags of property "name"
let descriptor = Object.getOwnPropertyDescriptor(obj, "name");

descriptor = stringify( descriptor ) // convertint the object into JSON

console.log( descriptor )

// If the property exists, defineProperty updates its flags. Otherwise, it creates the property with the given value and flags; in that case, if a flag is not supplied, it is assumed false.
Object.defineProperty( obj, "isAdmin", {
  value: true,
  writable: true,
  enumerable: true
});

let descriptor02 = Object.getOwnPropertyDescriptor(obj, "isAdmin");

descriptor02 = stringify( descriptor02 );

console.log( descriptor02 );

// let's make a property non-writable so it can't be re-assigned
Object.defineProperty( obj, "name", {
  writable: false
})

// obj.name = "adones" // doesn't work

// non-enumerable: let's make a property so it doesn't show up in for..in
obj.toString = () => {
  return "jake is a person"
};

// toString shows up, let's make it non-enumerable
for ( let key in obj ) {
  console.log( key )
}

Object.defineProperty( obj, "toString", {
  enumerable: false
})

console.log( "made toString non-enumerable" );
for ( let key in obj ) {
  console.log( key )
}

// setting multiple properties with Object.defineProperties
Object.defineProperties(obj, {
  height: { value: 1.78, writable: true, enumerable: true},
  surname: { value: "samejo", enumerable: true}
})

console.log( obj );

// Object.getOwnPropertyDescriptors() 
// To get all property descriptors at once, we can use the method Object.getOwnPropertyDescriptors(obj).

// Together with Object.defineProperties it can be used as a “flags-aware” way of cloning an object:

let clone = Object.defineProperties(
  {}, Object.getOwnPropertyDescriptors(obj)
);

console.log( "cloned object\n", clone )

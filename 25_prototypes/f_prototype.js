
// Remember, new objects can be created with a constructor function, like new F().

// If F.prototype is an object, then the new operator uses it to set [[Prototype]] for the new object.

let animal = {
  eats: true
}

function Rabbit( name ) {
  this.name = name
}

Rabbit.prototype = animal; // a regular property named prototype
// Setting Rabbit.prototype = animal literally states the following: “When a new Rabbit is created, assign its [[Prototype]] to animal”.

let whiteBunny = new Rabbit('Snow') // whiteBunny.__proto__ = animal

console.log( whiteBunny.eats ) //  true





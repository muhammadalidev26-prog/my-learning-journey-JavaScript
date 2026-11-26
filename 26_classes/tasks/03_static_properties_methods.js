
// As we know, all objects normally inherit from Object.prototype and get access to “generic” object methods like hasOwnProperty etc.
// But if we spell it out explicitly like "class Rabbit extends Object", then the result would be different from a simple "class Rabbit"?

// Here's an example of such code (it doesn't work, why? fix it)

class Rabbit extends Object {
  constructor(name) {
    super(); // we need to call super() constructor before we can access this
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

console.log( rabbit.hasOwnProperty('name') ); // works now!
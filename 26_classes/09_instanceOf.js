// The instanceof operator allows to check whether an object belongs to a certain class. It also takes inheritance into account.

class Rabbit {}
let rabbit = new Rabbit();

// is it an object of Rabbit class?
console.log(rabbit instanceof Rabbit); // true

function Calculator() {}

let calculator = new Calculator();

// it also works with constructor functions
console.log(calculator instanceof Calculator); // true

let arr = [1, 2, 3];

// and also with builtin Classes like array
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true
// arr also belongs to the Object class. That’s because Array prototypically inherits from Object.

// instanceof examines the prototype chain for the check
// we can also set custom logic in the static method Symbol.hasInstance

// The algorithm of obj instanceof Class works roughly as follows:

// If there’s a static method Symbol.hasInstance, then just call it: Class[Symbol.hasInstance](obj). It should return either true or false, and we’re done. That’s how we can customize the behavior of instanceof.

class Animal {
  
  static [Symbol.hasInstance] (obj) {
    if (obj.canEat) return true;
  }
}

let cat = {
  canEat: true
}

console.log( cat instanceof Animal ) // true, because cat has canEat: true

// Most classes do not have Symbol.hasInstance. In that case, the standard logic is used: obj instanceof Class checks whether Class.prototype is equal to one of the prototypes in the obj prototype chain.

if ( cat.__proto__ === Animal.prototype ||
    cat.__proto__?.__proto__ === Animal.prototype || 
    cat.__proto__?.__proto__?.__proto__ === Animal.prototype) {
      console.log(true)
} else console.log( false )

console.log(cat)
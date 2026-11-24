
// object in javascript have a secret property named [[prototype]]
// that is either null or references another object, that object is called Prototype


let animal = {
  eats: true,
  isHungry: false,
  walk() {
    console.log("Animal Walk") 
  }
}

let rabbit = {
  jumps: true
}

// the [[Prototype]] is hidden and internal but it can be set with __proto__, like this
rabbit.__proto__ = animal;

// whenever we read a property from an object and it's missing, JavaScript automatically takes it from the Prototype, it is called Prototypal Inheritance
console.log( rabbit.eats )
console.log( rabbit )

rabbit.walk(); // a method in animal can be called on rabbit

// the prototype chain can be longer

let longEar = {
  earLength: 10,
  __proto__: rabbit
}

longEar.walk(); // Animal walk

// The refernce can't go in circle, javascript would throw an error
// the prototype can only be refernce to another object or null, other types are ignored

// the for..in loop iterates over inherited properties too
// to stop that from happening we can use Object.hasOwnProperty() 

for (let prop in rabbit) {
  if (rabbit.hasOwnProperty(prop)) {
    console.log(prop)
  } else {
    console.log(`Inherited: ${prop}`)
  }
}




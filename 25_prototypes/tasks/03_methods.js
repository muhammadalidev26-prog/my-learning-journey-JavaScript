import { separator } from "../../separator.js"


// Let’s create a new rabbit object:

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  console.log(this,this.name);
};

let rabbit = new Rabbit("Rabbit");

// These calls do the same thing or not?

rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();

// they do the same thing but get different values of this, first one gets rabbit while other ones get object [[Prototype]] and there is no property name in it so they log undefined





import { separator } from "../../separator.js";
// Here’s the code that creates a pair of objects, then modifies them.

// Which values are shown in the process?

let animal = {
  jumps: null,
};
let rabbit = {
  __proto__: animal,
  jumps: true,
};

console.log(rabbit.jumps); // ? (1)

delete rabbit.jumps;

console.log(rabbit.jumps); // ? (2)

delete animal.jumps;

console.log(rabbit.jumps); // ? (3)

// There should be 3 answers.

// 1: true
// 2: null
// 3: undefined

separator("Task 2");

// The task has two parts.
// Given the following objects:

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
};

let bed = {
  sheet: 1,
  pillow: 2,
};

let pockets = {
  money: 2000,
};

// Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

// Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.

// there is no difference performance-wise whether we take a property from object or it's prototype, they remember where the property was found and reuse it


separator("Task 3")

// We have two hamsters: speedy and lazy inheriting from the general hamster object.
// When we feed one of them, the other one is also full. Why? How can we fix it?
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  stomach: [],
  __proto__: hamster
};

let lazy = {
  stomach: [],
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// This one also has it, why? fix please.
console.log( lazy.stomach ); // apple

// fixed it by adding stomach: [] in both speedy and lazy individually instead of making them share the stomach from hamster
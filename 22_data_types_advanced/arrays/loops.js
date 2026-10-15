import { separator } from "../../separator.js"

// Start of loops
let fruits = ["apple", "banana", "cherry", "date"];

let i = 0;
for (i; i < fruits.length; i++) {
  console.log(fruits[i]);
}

separator();

// but for arrays there is another form of loop: for ... of

for (let fruit of fruits) {
  console.log(fruit);
}

separator();

// becasue arrays are objects it's also possible to use: for ... in
for ( let fruitIndex in fruits ) {
  console.log( fruits[fruitIndex] )
}

separator();
// But there are problems with it, it isn't optimized for arrays and makes them slowed and
//  it can list non-numeric properties that some objects might contain and we don't want that



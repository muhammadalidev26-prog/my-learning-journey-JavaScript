"use strict"

// WHILE LOOP
// A while loop in JavaScript is a control structure that repeatedly runs a block of code as long as a specified condition remains true.


console.log("---------------------------- Table of ten ----------------------------");

let num = 1;

while (num <= 10) {
  console.log(`10 x ${num} = ${10 * num}`);
  num++;
};

console.log("---------------------------- Random Loop :) ----------------------------");
let num2 = 3;
while (num2) { // when num2 becomes 0, the condition becomes falsy, and the loop stops
  console.log( num2 );
  num2--;
}

console.log("---------------------------- Do While Loop ----------------------------");

// Do While Loop
// the condition can be moved below the loop-body when we want the loop to iterate at least once no matter the condition;
let num3 = 1;

do {
  console.log(num3);
} while (num3 > 1);


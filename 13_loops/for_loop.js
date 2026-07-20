"use strict"

// For Loop
/*

for (begin, condition, step)

begin 	let i = 0 	Executes once upon entering the loop.
condition 	i < 3 	Checked before every loop iteration. If false, the loop stops.
body 	alert(i) 	Runs again and again while the condition is truthy.
step 	i++ 	Executes after the body on each iteration.

*/

console.log("---------------------------- 1 - 5 numbers using for loop")
for (let i = 1; i <= 5; i ++) {
  console.log(i)
};

console.log("----------------------------Numbers in Reverse----------------------------")
for (let i = 10; i >= 1; i--) {
  console.log(i);
};

// Skipping Parts
// Any part of for loop can be skipped (begin, condition, step)

// Skipping Begin
console.log("----------------------------Skipping the Begin----------------------------")

let iterator = 1;
for (; iterator <= 5; iterator++) {
  console.log(iterator);
};

// Skipping condition (but you need to provide a breaking statement so the loop doesn't run infinitely)
console.log("----------------------------Skipping Begin as well as Condition----------------------------")

let iterator2 = 1;
for (;;iterator2++) {
  if (iterator2 ==5) break;
  console.log(iterator2);
};

// Skipping Step (it would create an infinite loop)
console.log("----------------------------Skipping everything, it'd create an infinite loop----------------------------")

// for (;;) {
//   console.log("Infinite loop...");
// };


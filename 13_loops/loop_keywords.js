"use strict"

// Different Loop Keywords exist for different scenarios

// Break (to stop a loop explicitly)

console.log("--------------------- Breaking the Loop explicityly -----------------------------")
for (let i = 1; i <= 100; i++) {
  if (i == 13) {
    console.log(i);
    console.log(`i has reached ${i}, the loop breaks...`);
    break;
  }
  console.log(i);
};


// Continue (we use it to skip a iteration and continue the next one)

console.log("--------------------- Breaking and continuing loop -----------------------------")
for (let i = 1; i <=100; i++) {
  if (i == 14) {
    console.log(`i has reached ${i}, the iteration continues from 16...`);
    continue;
  }
  else if (i==26){
    console.log(`i has reached ${i}, the loop breaks...`);
    break;
  }
  else if (i % 2 == 0) console.log(i);
};

// Label for loops in js
// Whenever we want a loop to completely stop inside a nested loop based on a condition, then it only break the loop where break statement is present and no the parent loop

console.log("--------------------- Labelling loops -----------------------------")

console.log("Without Label");
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) break; // This ONLY breaks the 'j' loop!
    console.log(`i: ${i}, j: ${j}`);
  };
};

console.log("Using Label");
mainLoop: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) break mainLoop; // This breaks the entire loop.
    console.log(`i: ${i}, j: ${j}`);
  };
};

console.log("Continue with Labeled Loop");

outerLoop: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) {
      continue outerLoop; // Skip the rest of this 'i' cycle, move to next 'i'
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}
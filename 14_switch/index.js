"use strict";

//Switch case
/*

  The value of x is checked for a strict equality to the value from the first case (that is, value1) then to the second (value2) and so on.
  If the equality is found, switch starts to execute the code starting from the corresponding case, until the nearest break (or until the end of switch).
  If no case is matched then the default code is executed (if it exists).

*/

console.log(
  "---------------------------Without Break Statement---------------------------",
);
// Without a break statement, when switch finds the case it executes it and keeps on executeing other cases until it finds break or reaches end of the loop.

let a = 4;

switch (a) {
  case 3:
    console.log("Too small");
  case 4:
    console.log("Exactly!");
  case 5:
    console.log("Too big");
  default:
    console.log("I don't know such values");
}

console.log(
  "---------------------------Without Break Statement---------------------------",
);

let b = 2 + 2;

switch (b) {
  case 3:
    console.log("Too small");
    break;
  case 4:
    console.log("Exactly!");
    break;
  case 5:
    console.log("Too big");
    break;
  default:
    console.log("I don't know such values");
}

console.log(
  "---------------------------Grouping Different Cases---------------------------",
);

let c = 3;

switch (c) {
  case 4:
    console.log('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    console.log('Wrong!');
    console.log("Why don't you take a math class?");
    break;

  default:
    console.log('The result is strange. Really.');
}

// Grouping cases is possible because of how switch/case works, so when case 3 matches and there is no break it moves on to case 4 and executes it code and hits break and stops.

// Type Matters, for case to match the type needs to be strictly matched.



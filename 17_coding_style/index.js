"use strict";

function pow(x, y) {
  let result = 1;

  for (let i = 0; i < y; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");
let y = prompt("y?", "");

if (n < 0) {
  alert(`Power ${n} is not supported please 
    enter a non-negative integer number.`)
} else {
  alert( pow(x, y) )
}

// Rules Followed
/* 
1. No space between function name and paranthesis 
2. Spare between parameters
3. Curly braces on same line after a space
4. Space around operators
5. Semicolon after expressions
6. Space between Arguments
7. Empty line between logical blocks
8. else {} without a line break
9. Space around a nested call
10. Lines are not very long
*/
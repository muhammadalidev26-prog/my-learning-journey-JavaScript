"use strict";
// Without strict mode I can create variables without declaring them (without let) but with strict mode it would throw an error.

// Throws Error
// age = 18;
// console.log(age);

// Works fine
let age;
age = 16;
console.log(age);

// We can also assign value and delcare the variable on the same line
let name = "jake";
console.log(name);

// Let's work with template strings
let intro = `My name is ${name} and My age is ${age}.`;
console.log(intro);

// You can also declare multiple variables in single line (but not recommended)
let height = 176,
  goal = "full stack web developer",
  rank = 1;
console.log(
  `My height is ${height}cm and My goal is to become a ${goal} and my position is ${rank}.`,
);

// You can also declare multiple variables using one let
let min_income = 80,
  current_income = 0,
  max_income = 1_000_000;

console.log(
  `My current income is ${current_income}k and I am expecting to get a minimum pay of ${min_income}k and max income of ${max_income}k or ${max_income / 1000000} million.`,
);

// You may get var instead of let in older scripts
var time = "older";
console.log(
  `var is a ${time} type of let, they have some differences but those differences don't matter to us yet.`,
);

// NOTE: A variable name can only contain letters, numbers, symbols and  _, and the first character must not be a digit.

// for variables whose value would be constant (never changing) you can use const instead of let
const myBirthDay = "03.01.2010";
console.log(`I am born on ${myBirthDay}`);

// Throws an error cause you can't change the value of a constant
// myBirthDay="3rd January 2010";

// For Hard-to-remember values you can create constant with capital letters as aliases
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

let background_color = COLOR_ORANGE;
console.log(background_color);

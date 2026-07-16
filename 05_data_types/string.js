"use strict"

// Strings
// A string is a data type contained in single/doubt quotes or backticks

// Single & double Quote Strings

// Double Quote Strings
let name = "muhammad ali";
console.log(name);

// Single Quote Strings
let surname = "samejo";
console.log(surname);

// NOTE: There is practically no difference in Single quote and double quote strings

// Backticks
// Backtick strings are used for extended functionality, they allow us to embed expressions and variables into a string by wrapping them in ${...}

function capitalizeFirstLetter(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

let intro = `My name is ${capitalizeFirstLetter(name)} and My surname is ${capitalizeFirstLetter(surname)}`;
console.log(intro);

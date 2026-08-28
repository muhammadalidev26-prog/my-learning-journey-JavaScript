"use strict"

function add(x, y) {
  return x + y;
};
function subtract(x, y) {
  return x - y;
};
function checkAge(age) {
  let value = (age >= 18) ? true : false;
  return value;
};
function showMovie(age) {
  if (!checkAge(age)) {
    return "Underage, can't watch the movie yet.";
  };
  return "Enjoy Your Movie Sir.";
}


const yearBorn = 2010;
let currentYear = 2026;
let currentAge;

currentAge = subtract(currentYear, yearBorn);
console.log(`Current Age is ${currentAge}`);

let futureAge;
let futureYear = 2041;
futureAge = add(currentAge, subtract(futureYear, currentYear));
console.log(`Future Age ${futureAge}`);

console.log("Trying To watch a movie.");
console.log(showMovie(futureAge));
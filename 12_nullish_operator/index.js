"use strict"


// Nullish coalescing operator
// It returns the first defined value but if both values or null/undefined, then it returns last one, in this case it would be undefined

console.log("------------------------------- Nullish coalescing Operator -------------------------------");
console.log(null ?? undefined); // undefined
console.log(undefined ?? ""); // ""
console.log("jake" ?? "butterfly"); // jake

// Common Usecase

console.log("------------------------------- Common Use Case -------------------------------");
let user;

let username = user ?? "Anonymous";
console.log(username);

user = "Jake";
username = user ?? "Anonymous";
console.log(username);

let firstName;
let middleName;
let lastName = "Supercodr";

console.log(firstName ?? middleName ?? lastName ?? "Anonymous"); // lastName -> Supercodr

// || vs ??
// || doesn't understand the difference between 0, false, null or undefined, for || all of these are just falsy values
// ?? returns the first defined value so even if a variable is assigned false value the ?? would return false because it is defined

console.log("------------------------------- || VS ?? -------------------------------");

let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0
console.log(false ?? "jake"); // false, cause false is defined value and it's not null either


// NOTE: It’s forbidden to use it with || or && without explicit parentheses.
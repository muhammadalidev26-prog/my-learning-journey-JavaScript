"use strict";

// Objects
// Objects are used to store data in Key:Value Pair;

let newUser = new Object();
newUser = {
  name: "muhammad ali",
  age: 16,
  height: 1.78,
  isAdmin: true,
  "loves nature": true
};

console.log(`The newUser's name is ${newUser.name},
    he is ${newUser.age}, about ${newUser.height}m tall
    ${newUser.isAdmin ?  "He is the Admin":"He isn't the admin"}
    ${newUser["loves nature"] ? "He loves Natureeeeee 🌳" 
    :"He doesn't love nature, this would never print"}`);

console.log(newUser["name"], "--- printed via square brackets");

// Key not present, doesn't return error but Undefined
console.log(newUser.noKey); // Undefined

// Defining a new key.
newUser.newKey = "yesKey";
console.log(newUser.newKey); // Defined it above now

// Getting Key from a variable's value;
let fruit = "Apple";

let grocceryCart = {
  [fruit]: 4, // here the word Apple would be put instead of [fruit]
};

console.log(grocceryCart); // { Apple: 4 }
console.log(grocceryCart.Apple);

// Property Value Shorthand
// In real life, we often use existing variables as property names
function makeUser(username, age) {
  return {
    username, // same as username: username
    age // same as age: age
  }
}

let user39 = makeUser("Roshan", 17);
console.log(`name of [user39] is ${user39.username}`);

// In keyword
// With "in" keyword you can check if a property exists in a object
if ("height" in user39) {
  console.log("height exists in user39 - Roshan")
} else {
  console.log("the property height doesn't exist in user39 - Roshan")
}
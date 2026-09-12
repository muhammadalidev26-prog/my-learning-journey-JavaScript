
// Here both stand differently and store the value "Hello"
let message = "Hello!";
let phrase = message;

// But objects reference to address in memory instead of storing it again
let user = {
  name: "jake",
  age: 13
}

// newUser object would refernce to existing object user in memory
let newUser = user;

console.log(user.name);
console.log(newUser.name);

user.name = "person";
console.log(user.name); // person, as expected
console.log(newUser.name); // It also changed even though we only modified the value of user not

// Cloning a object without referencing to same object
let user03 = {};
for (key in user) {
  user03[key] = user[key]
}
console.log(user03) // now user's changed won't affect user03

// Easier way to clone
let user04 = Object.assign({}, user03);
console.log(user04)

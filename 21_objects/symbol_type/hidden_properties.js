
let user = {
  name: "Ali"
};

user.age = 17; // Anyone using `user` can access age;

console.log(user);
// { name: "Ali", age: 17 }

// Introducing Symbol
let user02 = {
  name: "Ali"
};

let secret = Symbol("secret");

user02[secret] = "hello";

console.log(user02); // The property appears but it doesn't behave like a normal property 

// You can access it if you have the symbol
console.log(user02[secret]) // hello; but you can't access it with dot method or string method

// these both won't work because the property isn't secret but a symbol 
console.log(user02.secret) // Doesn't work
console.log(user02['secret']) // Doesn't work

// Enumerating the object, symbol() won't appear here
for (const [key, value] of Object.entries(user02)) {
  console.log(`${key}: ${value}`);
}


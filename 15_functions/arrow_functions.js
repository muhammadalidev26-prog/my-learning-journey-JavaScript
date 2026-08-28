// Arrow functions = a concise way to write function expressions
//    Good for simple functions that you only use once
//    (parameters) => some code

const hello = (name="Adones") => console.log(`Hello! ${name}`);
const sum = (x, y) => {return x + y};


hello("Ali");
console.log(sum(10, 20));

setTimeout( () => console.log("Hello World"), 2000);

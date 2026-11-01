
// a function is js is a value and every value has a type, what type is a function?
// Object, we can not only call them but add/remove properties, pass refernces etc

// name property
// It returns the name of a function

function sayHi(name) {
	sayHi.counter++
	return `Hi, ${name}`;
}

console.log( sayHi.name ) // Function's name: sayHI

// length property
// It returns the number of parameters of a function

console.log( sayHi.length ) // 1

// Custom Properties
// We can also set custom properties 

sayHi.counter = 0; // adding custom property

sayHi('jake')
sayHi('jake')
sayHi('jake')
sayHi('jake')
sayHi('jake')
console.log( sayHi.counter ) // called function 5 times
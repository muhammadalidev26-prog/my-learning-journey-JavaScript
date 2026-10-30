"use strict";
// The function sayHi uses an external variable name. When the function runs, which value is it going to use?
var name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

name = "Pete";

sayHi(); // what will it show: "John" or "Pete"?
// It takes newest changes from it's lexical environment


console.log('-----------------Task 2------------------')
// The function makeWorker below makes another function and returns it. That new function can be called from somewhere else.

// Will it have access to the outer variables from its creation place, or the invocation place, or both?

function makeWorker() {
  var name = "Pete";

  return function() {
    console.log(name);
  };
}

var name = "John";

// create a function
var work = makeWorker();

// call it
work(); // what will it show?
// It will show name Pete cause it gets the variable name from it's place of origin


console.log('-----------------Task 3------------------')
// Here we make two counters: counter and counter2 using the same makeCounter function.

// Are they independent? What is the second counter going to show? 0,1 or 2,3 or something else?

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

var counter = makeCounter();
var counter2 = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1

console.log( counter2() ); // ?
console.log( counter2() ); // ?
// It would start from 0 annd 1 cause each one would get it's own separate lexical environment


console.log('-----------------Task 4------------------')
// Here a counter object is made with the help of the constructor function.
// Will it work? What will it show?

function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

var counter = new Counter();

console.log( counter.up() ); // ?
console.log( counter.up() ); // ?
console.log( counter.down() ); // ?
// It would work and both functions are created within the same outer lexical environment so they share thte count var


console.log('-----------------Task 4------------------')
// Look at the code. What will be the result of the call at the last line?
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi2() {
    console.log(`${phrase}, ${user}, How are you?`);
  }
}

// sayHi2(); // Err, function not defined

console.log('-----------------Task 5------------------')
// Write function sum that works like this: sum(a)(b) = a+b.
// Yes, exactly this way, using double parentheses (not a mistype).

function sum(a) {
	return function(b) {
		return a + b
	}
}

console.log(sum(10)(20))


console.log('-----------------Task 6------------------')
// What will be the result of this code?
let x = 1;

function func() {
  console.log(x); // ?

  let x = 2;
}

// func(); // Err, can't access 'x' before initilization
// The engine knows about engine x but can't access it because it's in temporal dead zone

console.log('-----------------Task 7------------------')
/**
Make a set of “ready to use” filters:

    inBetween(a, b) – between a and b or equal to them (inclusively).
    inArray([...]) – in the given array.
*/

function inBetween(a, b) {
	return function(value) {
			return (value >= a && value <= b);
	}
}

function inArray(array) {
	return function(x) {
		return array.includes(x)
	}
}
let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2


console.log('-----------------Task 8------------------')
// We’ve got an array of objects to sort:

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(fieldName) {
	return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

console.log(users.sort(byField('name')))
console.log(users.sort(byField('age')))


console.log('------------------Task 9------------------')
// The following code creates an array of shooters.
// Every function is meant to output its number. But something is wrong…

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i; // copy of i
    let shooter = function() { // create a shooter function,
      console.log( j ); // that should show its number
    };
    i++;
    shooters.push(shooter); // and add it to the array
  }

  // ...and return the array of shooters
  return shooters;
}

let army = makeArmy();

// all shooters show 10 instead of their numbers 0, 1, 2, 3...
army[0](); // 10 from the shooter number 0
army[1](); // 10 from the shooter number 1
army[2](); // 10 ...and so on.



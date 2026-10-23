import {separator} from '../separator.js'

// "use strict";

// console.log( typeof null );

// let name = null; // null is intentional while undefined is "not assiigned"

// const DATE_OF_BIRTH = '3/1/2010'; // Const is used for hardCoded constants that are changed throughout the module

// console.log(DATE_OF_BIRTH, `Jake is a person` );

// // Tyepof null is object (old bug in Js)

// console.log(`Only backTicks allow multiline strings and value embedding into a string like ${DATE_OF_BIRTH}`);

// name = 'John';
// let admin = name;
// console.log(admin)

// console.log('----------------------------------')
// // Predicting the output
// console.log(Number(""), Number(" 12 "), Number("12px"), Number(false)); // 0 12 NaN 0
// // P2
// console.log(Boolean("0"), Boolean(" "), Boolean(""), Boolean(NaN)); // true true false false
// // P3
// console.log(String(null), String(undefined), Number("  "), Number("1e3")); // 'null' NaN 0 1000
// // P4
// console.log(Number(null), Number(undefined), Number(true));// 0 NaN 1


// console.log('-------------------------------');
// // P1
// console.log("5" - 2, "5" + 2, +"5" + 2); // 3 52 7

// // P2
// let a = 1;
// let b = a++ + ++a;
// console.log(a, b); // 3 4

// // P3
// console.log(2 ** 3, 8 ** (1 / 3), 7 % 3, -7 % 3);// 8 2 1 -1

// // P4
// console.log(null == 0, null >= 0, undefined == null, "2" > "12");// false true true true

// // P5
// console.log("" + 1 + 0, "" - 1 + 0, true + false, "4px" - 2); // '10' -1 1 NaN
// console.log(" -9 " + 5, " -9 " - 5, null + 1, undefined + 1); // -9 5, -14 1 NaN

// separator('switch')

// let age = 17;
// let value;

// if ( age >= 18 ) {
//   value = 'You can vote'
// } else if ( age < 18 && age >= 12 ) {
//   value = 'You can\'t vote but you\'d be able to do so soon'
// } else {
//   console.log('third condition: ', age)
//   value = 'You are a kid'
// }
// console.log( value );

// let height = 1.75
// let heightStatus;
// // Same logic but with Switch Case
// switch ( height ) {
//   case 1.75:
//     heightStatus = 'tall';
//   case 1.65: 
//     heightStatus = 'average'
//   case 1.55: 
//     heightStatus = 'short'
// }
// console.log( heightStatus )

// // isAdult() that returns true of false 
// function isAdult( age ) {
//   return age >= 18;
// }

// // **E2.** Write `pickName(first, last, nick)` returning the first non-empty one, or `"Anonymous"`. Do it with `||`, then explain what changes with `??`.

// function pickName( first, last, nick) {
//   return first || last || nick || "Anonymous"
// }
// // Labeling Loops
// outer: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     if (j === 1) break outer;     // breaks BOTH loops
//   }
// }

// separator('Predicting')

// // P1
// function showMessage(from, text = "no text") { console.log(from + ": " + text); }
// showMessage("Ann"); // Ann: no text
// showMessage("Ann", undefined); // Ann: undefined // confusion here
// showMessage("Ann", null); // Ann: null

// // P2
// console.log(sum(1, 2)); // 3
// function sum(a, b) { return a + b; }
// // console.log(mul(2, 3)); // function expressions are not hoisted so Error;
// // let mul = function (a, b) { return a * b; };

// // P3
// function f() {
//   return 
//     5;
// }
// console.log(f()); // undefined, the return value should never be on another line

// separator('arrow functions');
// f = n => n * 2;
// let g = (a, b) => {return a + b};
// console.log(f(3), g(1, 2)); // 6 3


// separator('Code Style and Comments')
// function sumNumbers(a, b) {
//   /**
//     return the sum of a and b, returns undefined if any of the two values isn't a number
//     */
//   if ( !(typeof a == 'Number') || !(typeof b == 'Number') ) return; // early return instead of nesting later
//   return a + b;
// }

// console.log( sumNumbers(10, '20') ) // undefined

// separator('Objects')

// let user = { name: "John", age: 30, "likes birds": true };

// console.log(user.name);                 // read
// user.isAdmin = true;       // add
// delete user.age;           // remove

// console.log( user )
// console.log(user["likes birds"]);       // brackets: any string / variable
// let key = "name";
// user[key];                 // "John"
// user.key;                  // undefined (looks for literal "key")

// let fruit = "apple";
// let bag = { [fruit]: 5 };  // computed property -> { apple: 5 }

// function makeUser(name, age) {
//   return { name, age };    // shorthand
// }

// // looping
// "age" in user;             // existence check (works even if value is undefined)
// for (let k in user) console.log(k, user[k]);

// separator('Copying Objects')

// let obj1 = {
//   name: 'jake',
//   age: 18,
//   status: {money: 0, skill: 1},
// }
// let obj2 = structuredClone(obj1);
// obj2.name = 'adones',
// obj2.status.skill = 2;

// console.log( obj1 )
// console.log( obj2 )

// separator('Methods and this')
// obj1 = {
//   name: 'jake',
//   greet() {
//     return `Hello, I'm ${this.name}`
//   }
// }
// obj1.name = 'Adones'
// console.log( obj1.greet() )

// separator('Constructor and new')

// function makeUser2(name) {
//   this.name = name;
//   this.greet = () => {
//     return `Hello, I'm ${this.name}`  
//   }
// }

// let user001 = new makeUser2('Rick');

// console.log(user001.greet())

// separator('Optional Chaining');
// // It short-curcuits if a value on it's left doesn't exist
// // You can use it for accessing things that might not exist

// let user002 = {
//   name: 'daryl',
//   address: {
//     city: 'chicago',
//   }
// }

// // let userAddress = user002.city.street // Err, cannot read properties of undefined
// let userAddress = user002.city?.street // undefined
// console.log( userAddress )

// separator('Symbol Type')
// let id = Symbol('id');
// user002[id] = 12; // Unique id, can't be accidently modified 
// console.log(user002) // Symbol does appear here but is skipped by loops and iterators

// // Symbol to Primitive
// separator('Symbol to Primitive')
// user002 = {
//   name: 'Daryl',
//   killCount: Infinity,
//   toString() {
//     return this.name + ' Fucking Dixon'
//   },
//   valueOf() {
//     return this.killCount // would return the killsCount
//   }
// }

// console.log( user002 )
// console.log( String(user002) ) // Daryl Fucking dickson
// console.log( Number(user002) )

// separator('Predicting the Output');
// // P1
// let a = { n: 1 };
// let b = a;
// b.n = 2;
// console.log(a.n, {} === {}, a === b); // 2 false true

// // P2
// key = "name";
// let u = { name: "Ali" };
// console.log(u.key, u[key], "name" in u); // undefined Ali true

// // P3 (strict mode)
// user = { name: "Ali", hi() { return this.name; } };
// let f = user.hi;
// console.log(user.hi()); // Ali
// // console.log(f()); // Err, cannot read properties of undefined

// // P4
// let obj = { toString() { return "2"; } };
// console.log(obj * 2, obj + 2); // 4 22


// // Predicting the output Again!!
// separator('Predicting Output')
// const calculator = {
//   multiplier: 2,
//   numbers: [1, 2, 3],
  
//   calculate() {
//     return this.numbers.map(function(num)  {
//       return num * this.multiplier;
//     });
//   }
// };

// console.log(calculator.calculate()); // 2 4 6

separator('Methods of Primitives')

let str = 'string'
console.log( str.toUpperCase() ) // STRING 

let float = 1.992810298;
console.log( +(float).toFixed(2) ) // toFixed() returns a string so use unary with it


separator('Numbers')
// regular numbers are 64bit-floats, use bigInt for huge numbers
console.log(1_000_000_000, 1e9, 1.23e-6);    // separators and exponent form
console.log(0xff, 0b1111, 0o377);              // hex, binary, octal

console.log((255).toString(16));      // "ff"
console.log((255).toString(2));       // "11111111"
console.log((123456).toString(36));    // "2n9c"  (two dots, or wrap in parentheses)

// Binary Floats can't store 0.1 correctly
console.log( 0.1 + 0.2 ) // 0.30000000000000004

// 0 and -0 both exist and any number greater than 1e500 is Infinity
console.log( 0 == -0) // true
console.log(9999999999999999) // 10000000000000000, precision loss

// Any number greater than 2^53-1 or less than -2^53 + 1 can't be stored properly in Number

// Checking the numbers
NaN === NaN;                 // false (NaN equals nothing)
isNaN("str");                // true  (converts to number first)
Number.isNaN("str");         // false (strict: only true for the number NaN)
isFinite("15");              // true  (converts)
Number.isFinite("15");       // false (strict)
Object.is(NaN, NaN);         // true
Object.is(0, -0);            // false

// Parsing
console.log('12.5rem', parseInt('12.5rem')) // read until they hit a bad character
console.log('12.5rem', parseFloat('12.5rem'))


separator('Predict the output')
// P1
console.log(0.1 + 0.2 === 0.3, +(0.1 + 0.2).toFixed(2) === 0.3); // false, true

// P2
console.log(Math.round(-2.5), Math.floor(-2.5), Math.trunc(-2.5), Math.ceil(-2.5));// -2 -3 -2 -2

// P3
console.log(NaN === NaN, Number.isNaN("str"), isNaN("str"), Object.is(NaN, NaN)); // false false true true

// Write randomInt(min, max) returning a random integer from min to max inclusive.
function randomInt(min, max) {
  // Ensure the inputs are integers by using Math.ceil for min and Math.floor for max
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
}

function randomInt2(min, max) {
  const minTrunced = Math.trunc(min);
  const maxTrunced = Math.trunc(max);

  return Math.floor( Math.random() * (maxTrunced - minTrunced + 1) + minTrunced )
} 

console.log( randomInt2(10, 15) );


import {separator} from '../separator.js'

// Code Block
// If a variable is declared inside code block{} it would be only visible inside it 
if ( 10 < 20) {
	let name = 'jake';
	console.log( name.toUpperCase() )
}

// console.log( name ) // error

// We can use it to isolate a piece of code with it's own variables 

{
	let message = 'Hello';
	console.log( message )
}

{
	let message = 'Goodbye';
	console.log( message )
}
// Without blocks {} there'd have been error because we can't re-declare a variable using let


separator('Nested Functions')
// Nested Functions
// Nestetd functions can access variables from parent function

function sayHiBye(firstName, lastName) {

  // helper nested function to use below
  function getFullName() {
    return firstName + " " + lastName;
  }

  console.log( "Hello, " + getFullName() );
  console.log( "Bye, " + getFullName() );
  return getFullName();

}

let getFullName = sayHiBye('Adones', 'Goggins')
console.log(getFullName) // still has access to it's lexical environment and variables

// Lexical Environment
separator('Lexical Environment')

function makeCounter() {
	let count = 0;
	return function() {
		return count++
	}
}

let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


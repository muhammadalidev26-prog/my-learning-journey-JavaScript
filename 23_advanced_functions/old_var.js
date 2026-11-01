
// Var is used in the old scripts and on surface it's almost same as let but it's a very different thing under the hood 

// Var has no Block Scope

{
	var name = 'Jake'
}
console.log(name) // jake

// we can use it when we want to access the value that's declared inside a code block {...code}

if (true) {
	var test = true
}

console.log(test) // can easily access it outside the block, but with let there had been an err

// If a var is declared inside function then it becomes function-level variable and can't be accessed outside the function

function sayHi() {
	var phrase = 'Hi'
	console.log('Messenger initialized..')
	return function(name) {
		return `${phrase}, ${name}`
	}
}

// console.log(phrase) // can't access it anymore 
let messenger = sayHi();

console.log(messenger('David'))

// Var tolerates multiple declaration
var name = 'jake';
var name = 'Ahmed' // No issue

// var variables can be declared below their use
notDeclaredYet = 'Assigning value to a variable before declaring it'

console.log(notDeclaredYet) // works!!

var notDeclaredYet; // Declaring below use


// IIFE: Imediately invoked function expression
// In the old times, only var existed and to make a variable private, programmers used this trick

(function() {

	var newVar = 'private variable';
	console.log(newVar)

})(); // Calling it right after creating it


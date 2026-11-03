
// there is one more way to create a function
// It is rarely used but sometimes there is no alternative

// let func = new Function ([arg1, arg2, ...argN], functionBody);

let sum = new Function( 'a', 'b', 'return a + b' )

console.log( sum(10, 15) ) // 25

// function is literally create from a string that is passed at run time
// We use it when we recieve a string from server and want to execuete it as a function

let str = `
	if ( 10 >= 9.9) {
		return "10 is greater than or equal to 9.9"
	} 
	return "10 isn't greater than or equal to 9.9'"
` // String of function recieved from a server

let newFunc = new Function( str )

console.log( newFunc() )


// When a function is created using new Function() syntax it's [[Environment]] is set to reference not to it's lexical environment but to global one.

var value = 'Global variable creating using var'
function parent() {

	let value = 'Inside the parent function';

	let child = new Function( 'console.log(value)' )

	return child
}

// parent()(); // Check the console in the browser ( it works there not in terminal )



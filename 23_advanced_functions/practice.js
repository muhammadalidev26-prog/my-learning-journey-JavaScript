
// Lexical Scope
// Scope just means where can this variable be found
// Lexical means that's decided where the code is written not where the code is run


function greetUser() {
	let userName = 'Siraj'
	return `Hello, ${userName}`
}

let userName = 'Jake' // not decided here but where the function is defined
console.log(greetUser())

// if a function uses a global variable that's later updated, it would use the updated value
// the functions points to the box (where to find the variable) not to the value

let color = 'red';

function favColor() {
	console.log(color)
}

color = 'Royal Blue';
favColor() // Royal Blue


function makeAdder(start) {
  let total = start;
  return function (n) {
    total += n;
    return total;
  };
}

let a = makeAdder(10);
let b = makeAdder(100);
console.log(a(5));
console.log(a(5));
console.log(b(1));

// What do the three calls return?
// 15
// 20
// 101
// a and b get different their separate boxes

// How many total variables exist, and which function points to which?
// Two total variables exist and in Box A and in Box B, a points to one in Box A and b points to one in Box B


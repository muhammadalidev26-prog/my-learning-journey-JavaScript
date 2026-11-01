
/**
Modify the code of makeCounter() so that the counter can also decrease and set the number:

    counter() should return the next number (as before).
    counter.set(value) should set the counter to value.
    counter.decrease() should decrease the counter by 1.

*/

function makeCounter() {

	let count = 0;

	function counter() {
		return count++
	}

	counter.set = value => count = value;
	counter.decrease = () => count--;

	return counter;
}

let counter = makeCounter();

counter.set(10)
console.log(counter()) // 10
console.log(counter()) // 11

counter.decrease();

console.log(counter()) // 11


console.log('--------------------Task2----------------------')

/**
 * Write function sum that would work like this:

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15

*/

function sum(a) {

	let totalSum = a;

	function f(b) {
		totalSum += b;
		return f;
	}

	f.toString = function() {
		return totalSum;
	}

	return f;
}

console.log( +sum(10)(20)(30) )
console.log(sum(0)(1)(2)(3)(4)(5) == 15)


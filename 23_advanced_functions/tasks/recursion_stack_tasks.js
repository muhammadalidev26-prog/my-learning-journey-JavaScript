import { separator } from '../../separator.js'

separator('Task 1')
// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

/**
Make 3 solution variants:

    Using a for loop.
    Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
    Using the arithmetic progression formula.
*/

// Variant 1
function sumTo(n) {

	let sum = 0;
	for (let i = 0; i <= n; i++) {
		sum += i
	}

	return sum;
}

console.log( sumTo(10) ) // 55
console.log( sumTo(4) ) // 10
console.log( sumTo(8) ) // 36


// Variant 2
console.log('Variant 2')

function sumTo2(n) {
	return (n == 0) ? 0 : n + sumTo2(n-1)
}

console.log( sumTo2(10) ) // 55
console.log( sumTo2(4) ) // 10
console.log( sumTo2(8) ) // 36


// Variant 3
// formula of Arithmetic Progression:  n(n+1)/2
console.log('Variant 3')
function sumTo3(n) {
	return ( n * ( n + 1 ) ) / 2;
}

console.log( sumTo3(10) ) // 55
console.log( sumTo3(4) ) // 10
console.log( sumTo3(8) ) // 36


separator('Task 2')
// The factorial of a natural number is a number multiplied by "number minus one", then by "number minus two", and so on till 1. The factorial of n is denoted as n!

function factorial(n) {
	return (n == 1 || n == 0) ? 1 : n * factorial(n-1)
}

console.log( factorial(5) ) // 120


separator('Task3')
// The sequence of Fibonacci numbers has the formula Fn = Fn-1 + Fn-2. In other words, the next number is a sum of the two preceding ones.
// First two numbers are 1, then 2(1+1), then 3(1+2), 5(2+3) and so on: 1, 1, 2, 3, 5, 8, 13, 21....
// Fibonacci numbers are related to the Golden ratio and many natural phenomena around us.
// Write a function fib(n) that returns the n-th Fibonacci number.

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
console.log( fib(6) )

separator('Task 4')
// Let’s say we have a single-linked list
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

// Write a function printList(list) that outputs list items one-by-one.
// Make two variants of the solution: using a loop and using recursion.

function printList(list) {
	console.log(list.value);
	if (list.next) {
		printList(list.next)
	}
}

printList(list)

import { separator } from '../separator.js'

separator('Two Ways of thinking')
// Two ways of thinking

// first way ( normal function )


separator('normal thinking')

function factorial(x) {
	let value = 1;

	if (x == 1 || x == 0) return 1;

	for (let i = 1; i <= x; i++) {
		value *= i;
	}
	return value;
}

console.log( factorial(2) )
console.log( factorial(1) )
console.log( factorial(0) )
console.log( factorial(5) )

separator('recursive thinking')
// second way ( recursive thinking )

function factorial2(x) {
	return (x === 1 || x === 0) ? 1 : x * factorial2(x-1)
}

console.log( factorial2(2) )
console.log( factorial2(1) )
console.log( factorial2(0) )
console.log( factorial2(5) )

// Excecuetion context, read about it from obsidian notes


separator('Recursive Traversals');

// suppose we have a long list of company employes with subdivisions in it and we want the sum of all salaries, we could use loops but it gets complex for nested objects and arrays, so we use recursive traversals
// Recursive Traversals: if it’s an array, sum it (base case). If it’s an object, call yourself on each value and add up the results (recursive step). The stack goes deeper for each nesting level.

let company = {
  sales: [
  	{
  	name: 'John',
  	 salary: 1000
  	}, 
  	{
  	name: 'Alice',
  	 salary: 1600 
  	}
  ],
  development: {
    sites: [
    	{
    	name: 'Peter',
    	 salary: 2000
    	},
    	 {
    	 name: 'Alex',
    	  salary: 1800 
    	}
    ],
    internals: [
    	{
    		name: 'Jack', 
    		salary: 1300
  		}]
  }
};


function sumSalaries( department ) {
	if (Array.isArray( department )) {
		return department.reduce( (prev, current) => prev + current.salary, 0 )
	} else {
		let sum = 0;
		for ( let subdep of Object.values( department )) {
			sum += sumSalaries(subdep)
		}
		return sum;
	}
}

console.log( sumSalaries(company) )


separator('Linked Lists')
// Normal arrays are slower when we want to modify the initial elements cause with each modification the array would have to shift elements to make room for the new element and with a million elements that's a million moves
// Linked lists solve this problem by not using numbered slots

let linkedList = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null // list ended here
			}
		}
	}
}

console.log( linkedList ) // just a object, you reach other values by following next
console.log( linkedList.value ) // 1
console.log( linkedList.next?.value ) // 2
console.log( linkedList.next?.next?.value ) // 3
console.log( linkedList.next?.next?.next?.value ) // 4
console.log( linkedList.next?.next?.next?.next?.value ) // undefined
// Optional chaining used, because the next might be null so we don't want a error but undefined in that case

linkedList = {value: "new", next: linkedList} // added new element in the beginning
console.log( linkedList )

// removing value: 2
linkedList.next.next = linkedList.next.next.next;
console.log( linkedList ) // value: 2 removed
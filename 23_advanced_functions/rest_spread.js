import { separator } from '../separator.js';


// rest parameters 
function sum(...numbers) {
	let sum = 0;
	for (let number of numbers) {
		sum += number
	}
	return sum;
}

let numbers = [10, 20, 30, 40, 50]
console.log( sum(...numbers) ) // 150

// In old times, there existed arguments arrayLike in every function and it twas thte only way tot get all the arguments of a function

function log() {
	console.log( arguments )
} 

log('jake', 'person', 'brother', 2)





// Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

/**
Make two variants of the solution.

    Using setInterval.
    Using nested setTimeout.
*/



function printNumbers(from, to) {

	let current = from;

	setTimeout( function go() {
		console.log(current);
		if (current < to) {
			setTimeout(go, 1000)
		}
		current++;
	}, 1000)
}

// printNumbers(1, 5)


function printNumbers2(from, to) {

	let current = from;

	let intervalID = setInterval( function go() {

		console.log(current)

		if ( current == to) {
			clearTimeout( intervalID )
		}

		current++;
	}, 1000)
}

// printNumbers2(1, 4)

let i = 0;

setTimeout(() => console.log(i), 100); // ?

// assume that the time to execute this function is >100ms
for(let j = 0; j < 100000000; j++) {
  i++;
}
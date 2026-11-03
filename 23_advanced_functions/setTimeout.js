
/**
We may decide to execute a function not right now, but at a certain time later. That’s called “scheduling a call”.

There are two methods for it:

    setTimeout allows us to run a function once after the interval of time.
    setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.
*/


// setTimeOut()
// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)

function logHello() {
	console.log('Hello')
}

function newfunc() {
	console.log('preparing message, please wait...')
}

console.log('Welcome...')
setTimeout(newfunc, 3000)

let id = setTimeout( logHello, 5000 )
 
// clearTimeout( timerId )
// We can cancel a timeout by using it's id

clearTimeout( id ) // canceling the timout with id equal to id


// Nested setTimeout

let timerId = setTimeout(function tick() {
  console.log('tick');
  timerId = setTimeout(tick, 2000); // (*)
}, 2000); // Runs infinitely with 2000ms gap between each run

// It is more flexible than setInterval
// let's say we are asking server for data every 2 seconds and if the server is overloaded we can put a condition and increase the timeout to 4, 5 or 6 seconds



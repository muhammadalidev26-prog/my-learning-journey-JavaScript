

function logHello() {
	console.log('Hello')
}


// All arguments have the same meaning. But unlike setTimeout it runs the function not only once, but regularly after the given interval of time.

let newTimerid = setInterval( logHello, 1000 ) // Would keep logging hello forever

setTimeout( () => { 
	clearTimeout( newTimerid );
	 console.log("Stopping logHello function ")}
, 5000);



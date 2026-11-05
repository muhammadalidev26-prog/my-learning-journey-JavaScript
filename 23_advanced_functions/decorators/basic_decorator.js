
// let's say we have a very CPU-heavy function but it's results are stable ( same input -> same output)
// for same x we always want to return same value
// if that function is called often we may want to cache (remember) the results to avoid spending extra-time on recalculations
// But instead of adding that functionality to main function, we'll create a wrapper function that adds caching as we'll see

function slow(x) {
	console.log( `Function called with ${x}` );
	return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
    if (cache.has(x)) {    // if there's such key in cache
      return cache.get(x); // read the result from it
    }

    // let result = func(x);  // Error if wrapping a object function
    let result = func.call(this, x) // Works fine with any kind of function

    cache.set(x, result);  // and cache (remember) the result
    return result;
  };
}

slow = cachingDecorator(slow)

console.log( slow(1) ) // slow(1) is cached and result is returned
console.log( 'Again', slow(1)) // result returned from cache ( function didnt run again)

// The caching decorator mentioned above is not suited for object methods

const worker = {
  someMethod() {
    return 1
  },
  slow(x) {
    console.log(`Called with ${x}`);
    return x * this.someMethod() // x * 1
  }
}

console.log( worker.slow( 2 ) ) // Works fine

worker.slow = cachingDecorator( worker.slow )

console.log( worker.slow( 3 ) ) // Works fine now because of func.call() ( see line 21 ) 

// Let's use special built in function func.call( context, ...args )
// It allow us to set the value of this manually
// It runs func providing the first argument as this, and the next as the arguments.

function sayHi() {
  console.log(`Hi, ${this.name}`)
}

let user001 = {
  name: 'Adones',
  age: 21,
  mail: 'adones@mail.xyz'
}

let user002 = {
  name: 'John',
  age: 19,
  mail: 'cena@mail.www'
}

// We can call the function sayHi() for these object ( providing the value of this as the object )
sayHi.call( user001 ) // provided the value of this as user001
sayHi.call( user002 ) // did the same thing

// In our case, we can use func.call on the result variable ( see line 20 )

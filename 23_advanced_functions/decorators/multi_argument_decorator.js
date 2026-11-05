
// In previous file we saw how cachingDecorator works with functions with only one argument
// Here we'd see cachingDecorator for functions with multiple arguments

let worker = {
  slow(min, max) {
    return min + max // just assume it's very CPU-heavy
  }
}

function cachingDecorator(func, hash) {
  let cache = new Map();
  return function() {
    let key = hash(arguments); // (*)
    if (cache.has(key)) {
      return cache.get(key);
    }
    
    let result = func.call(this, ...arguments); // (**)

    cache.set(key, result);
    return result;
  };
}

// Borrowing a function
// We take a function from other datatype ( e.g array ) and call it using arguments
function hash(args) {
  // return args[0] + ',' + args[1]; // only works for two argumentst
  // return args.join() // Err, args is a object not an array
  return [].join.call(args) // borrowing join methtod from array
}

worker.slow = cachingDecorator(worker.slow, hash);

console.log( worker.slow(3, 5) ); // works
console.log( "Again " + worker.slow(3, 5) ); // same (cached)s

function adds(...numbers) {
  let values = Object.values(arguments);
  let sum = 0
  for ( let value of values) {
    sum += value
  }
  return sum;
}

console.log('---------------Adds---------------------')
// Now works with functions with any number of arguments

adds = cachingDecorator(adds, hash);

console.log( adds(10, 20, 30, 40, 50, 60) ) // 210 
console.log( 'Again', adds(10, 20, 30, 40, 50, 60) ) // 210 


// func.call(context, arg1, arg2…) – calls func with given context and arguments.
// func.apply(context, args) – calls func passing context as this and array-like args into a list of arguments.
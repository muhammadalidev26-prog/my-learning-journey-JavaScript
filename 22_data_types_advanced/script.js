
// In JavaScript, primitive values (like strings or numbers) need to stay simple and fast, but developers still need to use methods on them (like .toUpperCase()).

// To solve this, JavaScript temporarily creates a hidden object wrapper around the primitive when you call a method, runs the method, and immediately destroys the wrapper. This gives you the convenience of objects without sacrificing performance.


// Basics examples of some methods

console.log( 'jake'.toUpperCase() ) // JAKE
console.log( 13.43311.toFixed(2) ) // 13.43, round the number to given decimal places

// NOTE: `null` and `undefined` have no methods
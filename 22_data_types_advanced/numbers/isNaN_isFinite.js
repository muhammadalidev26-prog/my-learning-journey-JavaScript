
// isNaN( value )
// It converts a value into number and checks if it is NaN

console.log( '------------------------------isNaN( value )-----------------------------------' )
console.log( isNaN( NaN )); // true
console.log( isNaN( 'string' )); // true
console.log( isNaN( Infinity )); // false

// we can't just find out if a value is nan by comparison because NaN doesn't equal anything including itself
console.log( NaN === NaN) // false

// isFinite( value )
// It converts it's value into number and returns true if it's a regular number and false if it's NaN, Infinity or -Infinity
console.log( '------------------------------isFinite( value )-----------------------------------' )
console.log( isFinite( '19' ) ) // true
console.log( isFinite( 18 ) ) // true
console.log( isFinite( 'string' ) ) // false, it's NaN
console.log( isFinite( Infinity ) ) // false





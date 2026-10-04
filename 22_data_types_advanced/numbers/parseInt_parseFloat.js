
// Numeric conversion using + or Number() is strict and fails if a value is not exactly a number

console.log( +'100px' ) // NaN

// parseInt parseFloat
// when we have a number with a unit with it or a currency symbol, e.g '100px', '50€', and we want to extract number out of it
// we use parseInt (that returns integer) or parseFloat that returns Floating point number
// these start reading a number from start until they can't. In case of an error the gathered number is returned 

console.log( parseInt( '100px' ) ) // 100
console.log( parseInt( '50€' ) ) // 50
console.log( parseInt( '60.89€' ) ) // 60
console.log( parseFloat( '50.89€' ) ) // 50.89

// parseInt( value, radix )
// the parseInt() function has a optional parameter. it specifies the base of numeral system,so parseInt() can work with hex, binary or octal numbers
console.log( parseInt( 'ff' ) ) // NaN
console.log( parseInt( 'ff', 16 ) ) // 255

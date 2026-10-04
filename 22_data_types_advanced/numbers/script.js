// Numbers

let netWorth;
netWorth = 1_000_000_000; // Underscores increase readability of a number
netWorth = 1e9; // same as above but shorter
let hexCode = 0xe3f1a01 // hex, binary and octal are also  supported via 0b and 0o prefixes


// Rounding
// Math.floor() - Rounds down, 3.1 - 3
// Math.ceil() - Rounds up, 3.1 - 4
// Math.round() - Rounds to nearest integer, 3.1 - 3
// Math.trunc() - Removes the Decimal part and returns just the number, 3.1 - 3, 3.9 - 3

console.log( Math.floor( 10.56 ) ) // 10
console.log( Math.ceil( 10.56 ) ) // 11
console.log( Math.round( 10.56 ) ) // 11
console.log( Math.trunc( 10.56 ) ) // 10


// Imprecise Calculations

// a number is stored in 64 bits so if a number is too big to store it may become a special type `inifinity`
console.log( 1e500 ) // infinity

console.log( 0.1 + 0.2 == 0.3) // false
console.log( 0.1 + 0.2 ) // 0.30000000000000004 , we can work around it by saying ( 0.1 + 0.2 ).toFixed(2) that retuns 0.30
console.log( ( 0.1 + 0.2 ).toFixed(2) ) // 0.30

// a number larger than 2^53 -1 can't be processed properly as integer
console.log( 9999999999999999 ) // Self Increasing Number












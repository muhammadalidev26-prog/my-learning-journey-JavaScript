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

console.log( 9999999999999999 ) // Self Increasing Number
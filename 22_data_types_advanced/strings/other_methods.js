
// string.includes( subString, pos )
// It returns true/false depends on if it found the subString in string
// the optional second argument is the position to start searching from

console.log( 'Widget with ID'.includes( 'Widget' ) ) // true
console.log( 'Widget with id'.includes( 'id', 2 ) ) // true

// the methods startsWith and endsWith do exactly what they say
console.log( 'jake'.startsWith('ja') ) // true
console.log( 'jake'.startsWith('e') ) // true


// str.codePointAt(pos) - Returns a decimal number representing the code for the character at position pos
console.log(`--------------------codePointAt(pos)-------------------------`)

console.log( "Z".codePointAt(0) ); // 90
console.log( "z".codePointAt(0) ); // 122
console.log( "z".codePointAt(0).toString(16) ); // 7a (if we need a hexadecimal value)

// String.fromCodePoint(code) - Creates a character by it's numeric code.
console.log(`--------------------fromCodePoint(pos)-------------------------`)
console.log( String.fromCodePoint(97) ) // a







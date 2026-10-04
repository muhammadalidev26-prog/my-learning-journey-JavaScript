
// Getting a subString from a string, 3 main ways
let string;


// 1. string.slice(start, end) - It returns the subString from string from start index to end-1 string (doesn't include end)
string = 'Jake is a person';
console.log( string.slice(0, 4) ) // Jake, 4 not include
console.log( string.slice(4).trim() ) // If there is no second argument then it slices the string till the end
// NOTE: .trim() function here removes the spaces at the beginning of the string and it would also remove from after the string if there were

// Negative values for start/end are also possible
console.log( string.slice(-5)) // erson


// 2. string.substring(start, end) - It is same as string.slice() but it allows the start value to be greater than end value
string = 'stringify'
console.log( string.substring(2, 6) ); // ring
console.log( string.substring(6, 2) ); // ring
// NOTE: Negative arguments are not supported


// 3. string.substr(start, lenght) - It returns substring from start position of the given length
string = 'jakeCake';
console.log( string.substr(-4, 4) ) // Cake
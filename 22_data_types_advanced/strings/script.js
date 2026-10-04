
// Strings


let single = 'single-quoted';
let double = "double-quoted";

// Backticks are more versatile and allow us to embed any expression into the string
let backticks = `backticks`;
let jakeStatus = 'dumbest';
let expressionEmbedIntoString = `Jake paul is the ${jakeStatus} fighter ever.`;

// Another advantage of using backticks is that they allow a string to span multiple lines
let guestList = `
  Jake Paul,
  Mike Tyson,
  Joe Rogan,
  Khabib
`

// Special Characters
guestList = 'Jake Paul \nMike Tyson \nJoe Rogan \nKhabib'// \n adds a newLine
let sentence = 'Jake paul\'s brother is also a fighter' // /' or /" just adds the quotes in the string

// Length Property
let string = 'Abc';
console.log( string.length ) // 3

// Accessing Characters
string = 'JAKE';
console.log( string[2] ) // K
console.log( string[string.length - 1] ) // E
console.log( string.at(2) ) // K,  you can also use string.at(pos) and it has a benefit - It allow negative pos
console.log( string.at(-1) ) // E

// Iterating through a string
console.log(`-----------------------Iterating-------------------`)
for ( char of string ) {
  console.log( char ) // J, A, K, E
}

// Strings are immutable
string = 'name';
string[0] = 't'; // doesn't work
console.log(string) // still 'name'

// Basic Methods

console.log(`-----------------------methods-------------------`)
string = 'Name';
console.log( string.toUpperCase() ) // NAME
console.log( string.toLowerCase() ) // name

// Searching for a subString
// str.indexOf()
// It looks for the substr in str, starting from the given position pos, 
// and returns the position where the match was found or -1 if nothing can be found.
console.log(`-----------------------Searching for a substring-------------------`)
string = 'Widget with id';

console.log( string.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
console.log( string.indexOf('widget') ); // -1, not found, the search is case-sensitive

console.log( string.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)
// the optional second parameter allow us to specify a start position
console.log( string.indexOf('id', 2) ) // 12


// Continue searching for all occurences
console.log(`-----------------------Searching for all occurences-------------------`)
let str = 'As sly as a fox, as strong as an ox';
let target = 'as'; // let's look for it

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  console.log( `Found at ${foundPos}` );
  pos = foundPos + 1; // continue the search from the next position
}

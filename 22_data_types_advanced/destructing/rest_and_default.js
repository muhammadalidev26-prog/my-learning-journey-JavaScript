import { separator } from '../../separator.js'

separator('...Rest')
// suppose an array has more values than the number of variables

var [a, b, c] = ['rick', 'carl', 'shane', 'daryl', 'maggie', 'glenn', 'negan'];

// all the other values are then omitted
console.log( `a: ${a}, b: ${b}, c: ${c}` );;

// that's where the ...rest comes into play
var [a, b, c, ...sideCharacters] = ['rick', 'carl', 'shane', 'daryl', 'maggie', 'glenn', 'negan']
// It would get all the remaining values
console.log( `a: ${a}, b: ${b}, c: ${c}, ...side characters: ${sideCharacters}` )
console.log( typeof sideCharacters, sideCharacters.length)

separator('Default values')

// rest is used when the values are more than the variables while default values are used when the values might be less than the variables

var [a, b, c] = ['jake', 'paul'] // two values three variables
// in such cases we can provide default values to variables 
console.log(a, b, c)
var [a, b, c='Mike Tyson'] = ['jake', 'paul']
console.log(a, b, c)

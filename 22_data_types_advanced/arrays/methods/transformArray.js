import {separator} from '../../../separator.js'
// arr.map(function())
// It applies the function on all elements of a array and returns a array of results

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6

separator()

// arr.sort()
// The call to arr.sort() sorts the array in place, changing its element order.
let arr = [ 1, 2, 15 ];

// the method reorders the content of arr
arr.sort();

console.log( arr );  // 1, 15, 2
separator()
// the order is wrong even after sorting because arr.sort() converts each element into string before comparison
// to sort properly we need to pass our own function as argument
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

arr = [ 1, 2, 15 ];
arr.sort(compareNumeric);
console.log(arr);  // 1, 2, 15

separator()

// A comparison function may return any number
// Actually, a comparison function is only required to return a positive number to say “greater” and a negative number to say “less”.
// That allows to write shorter functions:

arr = [ 1, 2, 15 ];

arr.sort(function(a, b) { return a - b; });

console.log(arr);  // 1, 2, 15
separator()
// arr.reverse()
// It reverses the order of elements in a array
console.log( 'before reversing', arr );
arr.reverse();
console.log ( 'after reversing', arr);

separator();
// arr.split( delim )
// split( delimeter transforms a string into a array based on the provided delim
let str = 'Jake, Chloe, Zaid, Arjun';
arr = str.split(', ')
console.log( `String: ${str} \nArray: ${arr} ---- type: ${typeof arr}` )

str = 'jake'
arr = str.split('') // it would break the string into letters
console.log( arr )

// str.join( glue )
// It joins a array into a string
console.log( arr.join('') ) // joining the string with no space between

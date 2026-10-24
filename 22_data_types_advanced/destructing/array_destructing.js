import { separator } from '../../separator.js'; 
// Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.


separator('Array Destructing');

// breakind down an array into variables
let arr = ["John", "Smith"];

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;
console.log(`Array: `, arr, '\nafter destructing into two variables:')
console.log(firstName); // John
console.log(surname);  // Smith

console.log('--------------\nCombining it with arr.split()');
[firstName, surname] = "Jake Paul".split(' '); // first converting string to array and then passing the array values to variables

console.log( firstName );
console.log( surname );

console.log('-------------------\nWe can work with any iterable not just Arrays\n We can also skip items');

let [name, , height] = [ 'Adones', '65kg', 1.78, 'The one' ]; // Skipped second and last value ( no variables for them)
console.log( name ); // Adones
console.log( height ); // 1.78

let [gradeA, gradeB] = 'ABCDEF'; // skipped all other letters just used first and second
console.log( gradeA );
console.log( gradeB );

console.log('----------------------\nSwapping Values')
let guest = 'Adones';
let admin = 'Ajmal';

[admin, guest] = [guest, admin] // admin would get values of guest and guest would get value of admin

console.log( admin )
console.log( guest ) 
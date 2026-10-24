import { separator } from '../../separator.js';

separator('Creation')

let now = new Date();
console.log( now );

console.log('Using toString() functions on date');
console.log('toString()', now.toString() );
console.log('toDateString()', now.toDateString() );
// console.log('toISOString()' now.toISOString() );
console.log('toLocaleString()', now.toLocaleString() );
console.log('toLocaleDateString()', now.toLocaleDateString() );;


console.log( now.toLocaleDateString().split('/'));

console.log();
console.log('Creating a date 24 hours after 1st Jan 1970')
let newDate = new Date(24 * 3600 * 1000) // 3600 seconds each hours * 24 hours * 1000 ( to convert seconds in miliseconds)

console.log( newDate.toDateString() )

console.log();
// new Date('datetString')
let birthDate = new Date('2010-01-03')
console.log( birthDate.toDateString() ) // Sun Jan 03 2010
console.log( birthDate.toLocaleString() )

// NOTE: Time is not given here so it assumes midnight GMT and is adjusted according to timeZone
// new Date(year, month, date, hours, minutes, seconds, ms)
// Months start from 0

separator('Parsing Date from String')
// Date.parse(str) -> returns the date from a string
let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

console.log(ms); // 1327611110417  (timestamp)

// There are methods to access the year, month and so on from the Date object:

// date.getFullYear() -> returns the year of the date
let date01 = new Date("2010-01-03")
console.log( date01.getFullYear() ) // 2010

// date.getMonth() ->returns the month of the date (0-11)
console.log( date01.getMonth() ) // 0 means Jan

// date.getDate() -> returns the date of the date object
console.log( date01.getDate() ) // 03

// getHours(), getMinutes(), getSeconds(), getMilliseconds()
// Get the corresponding time components.

// date.getDay() -> returns day of the week ( 0 for sunday and 6 for saturday)
console.log( date01.getDay() ) // 0 - means Sunday
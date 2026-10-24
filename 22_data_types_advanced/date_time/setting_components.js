
/**
The following methods allow to set date/time components:

    setFullYear(year, [month], [date])
    setMonth(month, [date])
    setDate(date)
    setHours(hour, [min], [sec], [ms])
    setMinutes(min, [sec], [ms])
    setSeconds(sec, [ms])
    setMilliseconds(ms)
    setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)
*/

let today = new Date() // creating the date object
let birthDate = new Date( '2010-01-03' )

console.log( today.toLocaleString() )

today.setFullYear(2010); // changed date year to `2010`
today.setMonth(0); // changed date month to Jan 0
today.setDate( birthDate.getDate() ); // changed date date to birthDate date

console.log( today.toLocaleString() )

// autoCorrection

today = new Date();
today.setDate( today.getDate() + 10 ) // setting date to 12 days from today ( it would autocorrect if the current months gets over and new months starts (so it would update month/year automatically if needed))

console.log( today.toLocaleString() )
console.log( today.getTime() ) // time in miliseconds
console.log( +today ) // Date into number, same as date.getTime()

console.log('-------------------------\nCalculating Time difference between two dates');

// If we only need to measure time, we don't need Date() object, we can use Date.now() to get current timestamp.
let start = Date.now(); // start measuring time

// do the job
for (let i = 0; i < 1000000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // end measuring time

console.log( `The loop took ${end - start} ms` );
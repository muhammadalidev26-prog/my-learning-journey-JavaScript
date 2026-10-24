import { separator } from '../../../separator.js'
// Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.

separator('Task 1')

let date01 = new Date(2012, 1, 20, 3, 12);
console.log( date01.toDateString() );


separator('Task2')
// Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

function getWeekDay(date) {
	let weekDays = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']

	return weekDays[date.getDay()]
}

let date02 = new Date();
console.log( getWeekDay(date02) ) // SA


separator('Task 3')
// European countries have days of week starting with Monday (number 1), then Tuesday (number 2) and till Sunday (number 7). Write a function getLocalDay(date) that returns the “European” day of week for date.

function getLocalDay(date) {
  let day = date.getDay();

  if (day == 0) { // weekday 0 (sunday) is 7 in european
    day = 7;
  }
  return day;
}

console.log(getLocalDay(date02))


separator('Task 4')
// Create a function getDateAgo(date, days) to return the day of month days ago from the date.
// For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.

function getDateAgo(date, days) {
  date.setDate(date.getDate() - days);
  return date.getDate();
}

console.log( getDateAgo(date02, 10))


separator('Task 5')
// Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0); // setting zero date on any month would take it to last date of previous month
  return date.getDate(); // last date of the month
}

console.log( getLastDayOfMonth(2026, 9) );


separator('Task 6')
// Write a function getSecondsToday() that returns the number of seconds from the beginning of today.

function getSecondsToday() {
  let date = new Date();
  return ( (date.getHours() * 3600) + (date.getMinutes() * 60) + date.getSeconds() ) ;
}

console.log(getSecondsToday());

separator('Task 6')
// Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.

function getSecondsToTomorrow() {
  let today = new Date();
  let tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate()+1)
  return (tomorrow - today) / 1000;
  // return [tomorrow.toLocaleString(), today.toLocaleString()]
}

console.log(getSecondsToTomorrow())





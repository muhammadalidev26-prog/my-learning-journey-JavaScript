

// JSON.stringify to convert objects into JSON.
// JSON.parse to convert JSON back into an object.


let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  spouse: null
};

let json = JSON.stringify(student, null, 2); // null and 2 are for making  it readable by human

console.log(typeof json); // we've got a string!

console.log(json);

// Json supports all dataTypes except Functions, symbols and undefined

// Json also fails to work with circular references
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: ["john", "ann"]
};

meetup.place = room;       // meetup references room
room.occupiedBy = meetup; // room references meetup

// JSON.stringify(meetup); // Error: Converting circular structure to JSON

console.log('-------------------------\nReplacer')
// If we pass a replacer, only the properties that match it will be encoded

let json02 = JSON.stringify(student, ['name', 'age', 'courses'], 2)
console.log(json02) // just name, age and courses, "no isAdmin or spouse"

// we can pass a function instead of passing a long array of properties
let json03 = JSON.stringify(student, (key, value) => {
	return (key == 'isAdmin' || key == 'spouse') ? undefined : value;
}, 2)

console.log(json03)


// JSON.stringify(obj, replacer, space)
// first argument is the value to be encoded
// second argument is the replacer that can analyze, skip or modify return values
// third argument is space ( space of indent )

console.log('----------Parser-------------')

// JSON.parse(jsonObj, reviver)

let value = JSON.parse(json02)
console.log( typeof value ) // object
console.log( value ) 

// the reviver modifies values, it is like replacer
let userData = '{"name":"Alice","registeredAt":"2026-03-30T12:00:00.000Z"}';

let parsedUser = JSON.parse(userData);

console.log(typeof parsedUser.registeredAt); 
// Output: "string" (You can't use date methods like .getFullYear() on it yet!)

parsedUser = JSON.parse(userData, (key, value) => {
	if (key == 'registeredAt') {
		return new Date(value)
	}
	return value
})

console.log( typeof parsedUser.registeredAt) // object, ready for date methods
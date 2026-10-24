import { separator } from '../../separator.js'

// The destructing assigment also works with objects

let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;

console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200

// The order doesn't matter, see below

let user01 = {
	name: 'jake',
	age: 18
}

separator()
let {age, name} = user01; // even then the property name would be passed to name variable 

console.log( name )
console.log( age )

separator()
// If you want to assign a property to a varible with other name, do this:

let user02 = {
	name: 'Anonymous',
	age: 17,
	isAdmin: false
}

// We can also combine colon with default values
let {name: userName='Jake Paul', age: userAge, isAdmin} = user02; // telling js manually to put name into userName and age into userAge

console.log( userName )
console.log( userAge )
console.log( isAdmin )


separator('Nested Destructing')
// If an object or an array contains other nested objects and arrays, we can use more complex left-side patterns to extract deeper portions.

var user03 = {
	name: 'Jesse',
	age: 18,
	loginDetails: {
		email: `jesse@gmail.com`,
		password: `jesse123@`
	}
}

// destructing assignment
var {
	name: name2,
	age: age2,
	loginDetails: {
		email
	},
	loginDetails: {
		password
	}
} = user03;

console.log( name2 )
console.log( age2 )
console.log( email )
console.log( password )

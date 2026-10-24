
// Write a function count(obj) that returns the number of properties in the object:

function count( obj ) {
	return Object.entries(obj).length
}

let user = {
  name: 'John',
  age: 30,
  height: 1.75,
};

console.log	( count(user) ); // 2
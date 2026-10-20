import {separator} from '../../separator.js'

// new Map()
// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
/*
Methods and properties are:

    new Map() – creates the map.
    map.set(key, value) – stores the value by the key.
    map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
    map.has(key) – returns true if the key exists, false otherwise.
    map.delete(key) – removes the element (the key/value pair) by the key.
    map.clear() – removes everything from the map.
    map.size – returns the current element count.
*/
let data = new Map();

data.set("jake", "person");
data.set("1", "str1"); // a string key
data.set(1, "num1"); // a numeric key
data.set(true, "bool1"); // a boolean key

console.log( data.get(true) ) // bool1;
console.log( data.has('2') ) // false
console.log( data.size )
separator();

// Iteration over Map using three methods

let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
  console.log(entry); // cucumber,500 (and so on)
}
separator();

// Besides that map also has a builtIn forEach function just like a Array
recipeMap.forEach( (value, key, map) => {
  console.log( `${key} -> ${value} from ${map}` )
})

separator('Map from Object')

// When a Map is created, we can pass an array (or another iterable) with key/value pairs for initialization, like this:
let userDetails = new Map([
  ['name', 'jake'],
  ['age', 18],
  ['height', 1.8]
])
console.log(userDetails)

// If we have a plain object, and we’d like to create a Map from it, then we can use built-in method Object.entries(obj) that returns an array of key/value pairs for an object exactly in that format.
let obj = {
  'education': 12,
  'degree': 'BSCS'
}

let userEducation = new Map( Object.entries(obj) )
console.log( userEducation )

separator('Object from Map')
// There’s Object.fromEntries method that does the reverse: given an array of [key, value] pairs, it creates an object from them:

let userDetailsObj = Object.fromEntries(userDetails);
let userEducationObj = Object.fromEntries(userEducation);
console.log( userDetailsObj )
console.log( userEducationObj )
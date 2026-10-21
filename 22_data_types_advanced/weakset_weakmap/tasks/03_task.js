import {separator} from '../../../separator.js'

// Predict the output
let set = new Set();
set.add(1);
set.add("1");
set.add(1);
set.add({});
set.add({});
console.log(set.size);
// The output would be 4 cause every object is different 

separator('Challenge 2')

// Predict the output
let map = new Map();
map.set("a", 1);
map.set("b", 2);
map.set("a", 99);
console.log(map.size); // 2
console.log(map.get("a")); // 99
console.log(map.get("z")); // undefined
// the a's value gets overwritten here

separator('Challenge 3')

// Given let words = ["hi", "yo", "hi", "hey", "yo", "hi"];, write code that creates an array containing each word only once.

let words = ["hi", "yo", "hi", "hey", "yo", "hi"];
words = [...new Set( words )]
console.log( words ) // hi, yo, hey

separator('Challenge 4')

// Given the same words array, build a Map where each key is a word and each value is how many times it appears in the array.
words = ["hi", "yo", "hi", "hey", "yo", "hi"]
const wordCountMap = words.reduce((accumulator, word) => {
  accumulator[word] = (accumulator[word] || 0) + 1;
  return accumulator;
}, {});

console.log(wordCountMap);

separator('Challenge 5')

// why does this fail
let ws = new WeakSet();
// ws.add("hello"); // Cause only an object can be used as a key in weakSet

separator('Challenge 6')

// a) Track which users have their notifications muted. -> I'd use a weakSet
// b) Track each user’s last-seen timestamp. -> I'd use a weakMap
// c) Track how many users exist right now, with a live count. -> I'd use a weakSet here also

separator('Challenge 7')

let cache = new Map();

function getArea(shape) {
  if (!cache.has(shape)) {
    cache.set(shape, shape.w * shape.h);
    return cache.get(shape);
  }
  return cache;
  // Moved return cache.get(shape) inside the condition block because it would hahve to return the value even if the shape didn't exist in cache;
}
 // I didn't understand this one




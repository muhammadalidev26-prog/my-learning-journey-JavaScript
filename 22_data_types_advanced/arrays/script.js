// Array - store ordered collection

let fruits = [
  'apple',
  'banana',
  'watermelon',
];

// indexing
console.log( fruits[1] ) // banana

// replace
fruits[1] = 'pomegranate';
console.log( fruits )

// or add new one
fruits[fruits.length] = 'mango'
console.log( fruits )

// get last element with array.at( index ) 
console.log( fruits.at(-1) ) // fruits[-1] doesn't work in js




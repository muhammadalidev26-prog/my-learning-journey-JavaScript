// We can not only bind `this` but also arguments

function multiply(a, b) {
  return a * b;
}

let double = multiply.bind(null, 2) // b would also be 2

console.log( double(5) )
// It's called Partial function application, we create a new function by modifying some parameters of the existing ones


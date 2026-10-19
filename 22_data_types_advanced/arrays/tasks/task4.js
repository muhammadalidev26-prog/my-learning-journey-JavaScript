
// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
// Create a function copySorted(arr) that returns such a copy.

function copySorted(arr) {
  return arr.slice().sort()
}

let arr = [0, 2, 1, 3]
let sorted = copySorted( arr )
console.log( `Sorted ${sorted} \nOriginal ${arr} ` )
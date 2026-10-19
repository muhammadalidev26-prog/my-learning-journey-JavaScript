
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

function filterRange(arr, a, b) {
  return arr.filter( item => ( a <= item && item <= b))
}



console.log( filterRange( [1, 2, 3, 9, 0], 1, 7 ) )
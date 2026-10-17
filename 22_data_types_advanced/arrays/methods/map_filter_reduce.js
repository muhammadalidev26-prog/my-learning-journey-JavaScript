import {separator} from '../../../separator.js'
// map( funcion )
// We use to return the value of an array after performing operations on them and create a new array
let prices = [100, 120, 80, 90];
let discountedPrices = prices.map( price => price * 0.5 )

console.log( prices, '\n', discountedPrices )

separator()

// filter( functiton )
// It returns the value when it gets true otherwise returns nothing

let arr2 = [10, 20, 25, 30]
let filteredArr = arr2.filter( ( value ) => {
  return (value % 2 == 0);
})

console.log( arr2 )
console.log( filteredArr )

separator();

// arr.reduce ( function )
// It is used to reduce an array to one element

arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

let reducedArr2 = arr2.reduce( (v1, v2) => v1 + v2 )
console.log( reducedArr2 )
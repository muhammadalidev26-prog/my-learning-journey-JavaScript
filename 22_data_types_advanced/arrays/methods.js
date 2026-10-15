
let ages = [14, 15, 16, 17];
console.log( `Array before any modification: `, ages )

// pop() - Extracts the last element of the array and returns it:
console.log( ages.pop() )
console.log( ages ) // 17 removed

// push() - appends to an element in the end
ages.push( 67 )
console.log( ages ) // 67 added in the end


// shift() Extracts the first element of the array and returns it:
console.log( ages.shift() )
console.log( ages ) // 14 removed

// unshift() adds the element to the beginning of the array
ages.unshift( 80 )
console.log( ages ) // 80 added in the beginning


// toString() - returns a string representation of the array
// Arrays have their own implementation of toString method that returns a comma-separated list of elements.

let arrToStr = [1, 2, 3, 4, 5];
console.log( arrToStr.toString() ); // "1,2,3,4,5"


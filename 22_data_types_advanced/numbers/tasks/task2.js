
// According to the documentation Math.round and toFixed 
// both round to the nearest number: 0..4 lead down while 5..9 lead up.

console.log( 1.35.toFixed(1) ) // 1.4
console.log( 6.35.toFixed(1) ) // 6.3

// Here the precision is lost, so to fix that we must bring the number close to a integer prior to rounding

console.log( Math.round( 6.35 * 10 ) / 10) // here there is precision loss becasue the decimal part is 0.5, which is 1/2 fractions divided by 1/2 are exactly stored in binary
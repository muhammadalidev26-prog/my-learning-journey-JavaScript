
// Make this iterable and then loop over it using for...of
let countdown = {
  from: 90,
  to: 70
};

// target = countdown['to'];
// start = countdown['from']
// for (; start >= target; start-- ) {
//   console.log(start)
// }

countdown[Symbol.iterator] = function() {
  start = this.from;
  target = this.to;

  return {
    next() {
      if ( start >= target ) {
        return {done: false, value: start--};
      } else {
        return {done: true}
      }
    }
  }
}

for (let a of countdown) {
  console.log( a )
}

// Another Solution

// countdown[Symbol.iterator] = function() {
//   return {
//     current: this.from,
//     last: this.to,
    
//     next() {
//       if (this.current >= this.last) {
//         return { done: false, value: this.current-- };
//       } else {
//         return { done: true };
//       }
//     }
//   };
// };

// Loop over it using for...of
// for (let num of countdown) {
//   console.log(num); // Outputs 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// }

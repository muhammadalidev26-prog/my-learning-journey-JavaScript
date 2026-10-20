
// should log 2, 4, 6 ... 20
let evens = {
  max: 15
};

evens[Symbol.iterator] = function() {
  return {
    current: 2,
    max: this.max,
    next() {
      if (this.current <= this.max) {
        let value = this.current;
        this.current += 2; // Step by 2 to get the next even number
        return { done: false, value: value };
      } else {
        return { done: true };
      }
    }
  };
};

for (let even of evens) {
  console.log( even )
}
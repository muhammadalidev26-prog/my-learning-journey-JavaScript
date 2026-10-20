function makeIterable(obj) {
  obj[Symbol.iterator] = function () {
    let keys = Object.keys(this); // snapshot of the keys
    let index = 0;                // the "bookmark"

    return {
      next: () => {
        if (index < keys.length) {
          let key = keys[index++];
          return { done: false, value: [key, this[key]] };
        } else {
          return { done: true };
        }
      }
    };
  };

  return obj;
}

let user = makeIterable( {
  name:'jake',
  age: 18,
  height: 1.78
})

for (let value of user) {
  console.log(value)
}

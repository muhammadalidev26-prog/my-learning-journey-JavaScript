
// JavaScript operators usually don't know what to do with an object,
//  so JavaScript first tries to turn the object into a primitive value.

let obj1 = { name: 'Ali' };
let obj2 = { name: 'Jake' };

console.log(obj1 + obj2) 
console.log(typeof (obj1 + obj2)) // string 

// Hints
// there are three variants of type conversion, that happen in various situations
// String - for object-to-string conversion
// Number - for object-to-number conversion
// default - when operator is not sure what type to expect - for instance '+' can work with both strings and numbers

// Symbol.toPrimitive
let user = {
  name: 'John',
  balance: 18000,

  // [Symbol.toPrimitive](hint) {
  //   console.log(`Hint: ${hint}`);
  //   return hint == 'string' ? this.name : this.balance
  // }
  toString() {
    return this.name
  },
  
  valueOf() {
    return this.balance;
  }
}

console.log( String(user) + ' Rambo' )
console.log( user + 1000 )
console.log( user )

let obj = {};
console.log({
  [obj]: "object as key"
}); // "[object Object]"

// obj is empty, so where does toString come from? Nobody wrote it.
// the idea is that instead of giving every object it's own functions separately they just get reference to [[Prototype]] which contains all the functions

let arr = [1, 2, 3];
console.log(arr.__proto__ === Array.prototype);                 // true
console.log(arr.__proto__.__proto__ === Object.prototype);      // true (every built-in ends here)
console.log(arr.__proto__.__proto__.__proto__);                 // null (end of the chain)

// functions are objects too so they also carry [[Prototype]]

// Primitives borrow wrappers. Writing "hi".toUpperCase() briefly wraps the string in a String object. 
console.log( "hi".toUpperCase() ) // gets wrapped in String("hi").toUpperCase()

// null and undefined have no wrapper, so they have no methods.

// Borrowing methods works on array-like objects. obj.join = Array.prototype.join works because join only needs indexes and a length.

obj = {
  0: "Hello",
  1: "world!",
  length: 2,
};

obj.join = Array.prototype.join;

console.log( obj.join(',') ); // Hello,world!
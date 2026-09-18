
// Is it possible to create functions A() and B() so that new A() == new B(); 

// function A() { return {} }
// function B() { return {} }

let obj = {};

function A(name) {
  // this.name = name;
  // return {}
  return obj;
}
function B(name) {
  // this.name = name;
  // return {}
  return obj;
}

let a = new A('jake');
let b = new B('jake');

console.log( a == b ); // true
console.log( a ); // true
console.log( b ); // true

console.log( new A() )
console.log( new B() )
console.log( new A() == new B() ); // true


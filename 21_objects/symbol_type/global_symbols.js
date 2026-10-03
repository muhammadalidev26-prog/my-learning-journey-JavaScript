
// Global Symbols
// usually all symbols are different. But sometimes we want same-named symbols to be same entities.
// For instance, different parts of our application want to access symbol "id" meaning exactly the same property.
// To achieve that, there exists 'a global symbol registry'. We can create Symbols in it and access them later

// In order to read (create if absent) a symbol from the registry we use Symbol.for('description')

// Symbol.for()
let id = Symbol.for( 'ID' );

let userID = Symbol.for( 'ID' )

console.log( id == userID ) // true;

// Symbol.keyfor()
// by Symbol.for() we get symbol for name but inorder to get name for symbol we use Symbol.keyfor()
console.log( Symbol.keyFor(userID) ) // ID

// for non-global symbols we can get the description by
let nonGlobalSym = Symbol( 'Jake' );

console.log( Symbol.keyFor( nonGlobalSym )); // Undefined, not global
console.log( nonGlobalSym.description ); // Jake

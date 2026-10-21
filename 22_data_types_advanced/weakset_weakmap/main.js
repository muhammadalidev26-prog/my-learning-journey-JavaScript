
// Normally objects are prevented from being garbage collected if there are any references to it in another data structure

// But weakMap doesn't prevent an object from garbage collected even if it exists in some other data-structure

// WeakSet: tracks which objects have a certain "yes/no" status

let alreadyWelcomed = new WeakSet(); // empty WeakSet

let ali = { name: "Ali" };
let sara = { name: "Sara" };

// add(): mark objects as "welcomed"
alreadyWelcomed.add(ali);
alreadyWelcomed.add(ali); // adding twice does nothing, no duplicates

// has(): check membership, returns true/false
console.log(alreadyWelcomed.has(ali));  // true
console.log(alreadyWelcomed.has(sara)); // false

// function that only welcomes each user once
function welcome(user) {
  if (alreadyWelcomed.has(user)) {
    console.log(user.name + " was already welcomed, skipping");
    return;
  }
  console.log("Welcome, " + user.name + "!");
  alreadyWelcomed.add(user); // remember that we welcomed them
}

welcome(sara); // Welcome, Sara!
welcome(sara); // Sara was already welcomed, skipping

// delete(): remove an object from the set manually
alreadyWelcomed.delete(ali);
console.log(alreadyWelcomed.has(ali)); // false

// Automatic cleanup: when nothing else references sara,
// the engine removes her from the WeakSet on its own
sara = null;

// NOT allowed on a WeakSet:
// alreadyWelcomed.add("text");  -> Error, must be an object
// alreadyWelcomed.size          -> undefined, no size
// for (let x of alreadyWelcomed) -> Error, can't loop
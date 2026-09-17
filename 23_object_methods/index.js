

let user = {
  name: 'john',
  email: 'john@mail.com',
  password: 'jake123'
}

// Method 
// A function that belongs to an object
user.sayHi = () => {return "Hi"};

console.log(user.sayHi());

// We can also use a pre-declared function
function loudLaugh() {
  return "Initializing Laugh \nHa Ha Ha Ha..."
}
user.laugh = loudLaugh;


// It's common that a object method needs to access tthe informatiton,
//  stored inside the object tott do it's job, for instance:

// deleting old sayHi function.
delete user.sayHi;
delete user.laugh;

user.sayHi = function() {
  return `Hi ${ this.name }`
}
console.log( user.sayHi() );


// Creating the same function and using it multiple times  
user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  console.log( this.name );
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)

sayHi() // Undefined - no object provided
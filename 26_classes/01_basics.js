// In practice, we need to create many objects of same type like users, goods, etc
// and constructors can help with that but there is a better way, classes
// the basic syntax is

class User {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I'm ${this.name}`);
  }

}

let user001 = new User('jake', 18)

user001.sayHi();

// a class is a type of a function
console.log( typeof User ) // function

// the object is created with name and age property and sayHi function is created in prototype so all objects of User constructor would share thte methods;
let user002 = new User('andrew', 21)

console.log( user001.sayHi === user002.sayHi) // true, sharing the same method instead of getting separate for each


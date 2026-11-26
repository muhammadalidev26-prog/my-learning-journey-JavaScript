
// “Class fields” is a syntax that allows to add any properties.

class User {

  isAdmin = false; // added property

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  printDetails() {
    console.log(`name: ${this.name} age: ${this.age}, isAdmin: ${this.isAdmin}`)
  }
}

let user01 = new User("paul", 19)
// The important difference of class fields is that they are set on individual objects, not User.prototype:
console.log( user01 ) // isAdmin present in this object


// Making bound methods with class fields
// if a function is passed around it can loose this

class Button {

  constructor(value) {
    this.value = value;
  }

  click() {
    console.log( `Button Value: ${this.value}` )
  }

  click2 = () => { // we can pass button.click2 anywhere and the value of this will remain correct
    console.log(`Button Value: ${this.value}`)
  }

}
let newButton = new Button('new button')
setTimeout( newButton.click, 1000) // undefined
setTimeout( newButton.click2, 2000) // works
"use strict";

let group = {
  title: "Our Group",
  students: ["John", "Adnrew", "Mike"],

  showList() {
    this.students.forEach( (student) => console.log(this.title + " : " + student))
  },
  
  showList2() {
    this.students.forEach( function(student) {
      console.log(this.title + " : " + student)
    })
  }
}

// group.showList2(); // Err regular functions have this=undefined so undefined.title returns error

function showList3() {
  return this.students;
}

// The value of this is looked in the outer lexical environment ( just like search of a variable)
let showList4 = () => this.students

showList3 = showList3.bind(group)
showList4 = showList4.bind(group)

console.log( showList3()) // Binding worked
console.log( showList4()) // Binding doesn't work with Arrow functions

/**Arrow functions:

    Do not have this
    Do not have arguments
    Can’t be called with new
    They also don’t have super, but we didn’t study it yet. We will on the chapter Class inheritance

That’s because they are meant for short pieces of code that do not have their own “context”, but rather work in the current one. And they really shine in that use case. */


"use strict"

// alert("hello Adones!")
// alert("Hello");
// [1, 2].forEach(alert);

let jake = "person";

let age = 17, height = 1.75 + "m";

console.log(jake,age,height)

let jakeHeightInSchool = 1.33 + "m";
console.log(jakeHeightInSchool);

let person;
person = "name is jake";

console.log(person);


// A hardcoded const is wrriten in uppercase that is known before execution but those that aren't known before execution get normal camelCase naming

console.log(1/0); // Infinity
console.log(-1/0); // -Infinity

console.log(8.91 ** "jake");

console.log(`Jake is a ${jake}`);

console.log(9 % 2);
console.log(64**(1/2));

console.log(+true) // 1, + as unary operator functions as Number(...)
console.log(+false);

console.log("For Each Function in action");
[1,3,4,4].forEach(item => console.log(item));

console.log("----------for loop----------")
let iterator = 1;
for (iterator; iterator <= 10; iterator++) {
  console.log(iterator);
}

console.log("----------while loop----------")
let num = 10;
while (num >= 1) {
  console.log(num);
  num--;
}

console.log(typeof(() => {return "jake"}));

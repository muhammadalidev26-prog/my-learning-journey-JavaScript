"use strict"

// let age = prompt('age?', 18);

// let message = (age <= 3) ? 'Hi, baby!' :
//   (age <= 18) ? 'Hello!' :
//   (age <= 100) ? 'Greetings!' :
//   'What an unusual age!';

// alert( message );

// Conditionals
// let accessAllowed;
// let age = prompt('How old are you?', '');


// if (age >= 18) {
//     accessAllowed = true;
//   }
//   else {
//       accessAllowed = false;
// };
// console.log(accessAllowed);



// If Statements replaced by '?'

let age = prompt('How old are you?', '');

let accessAllowed = (age >= 18) ? true : false;

let message = accessAllowed ? "You have been granted full system ACCESS" : `You need to wait for ${18-age} years`;
alert(message);


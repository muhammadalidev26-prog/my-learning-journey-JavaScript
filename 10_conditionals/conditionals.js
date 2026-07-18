"use strict"


// Conditionals
// let accessAllowed;

// if (age >= 18) {
  //   accessAllowed = true;
  // }
  // else {
    //   accessAllowed = false;
    // };



// If Statements replaced by '?'

// let age = prompt('How old are you?', '');

// let accessAllowed = (age >= 18) ? true : false;

// let message = accessAllowed ? "You have been granted full system ACCESS" : `You need to wait for ${18-age} years`;
// alert(message);


// A sequence of question mark operators ? can return a value that depends on more than one condition.

let age = prompt('age?', 18);

let message = (age <= 3) ? 'Hi, baby!' :
  (age <= 18) ? 'Hello!' :
  (age <= 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );
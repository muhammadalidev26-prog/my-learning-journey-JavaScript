"use strict";

// Conditionals
/*
Sometimes, we need to perform different actions based on different conditions.
To do that, we can use the if statement and the conditional operator ?, that’s also called a “question mark” operator.
*/

// Select the form element
const form = document.getElementById("myForm");

// Listen for the submit event
form.addEventListener("submit", function (event) {
  // Get the input value and trim extra spaces
  const inputValue = document.getElementById("adones").value.trim();

  // Check if the value matches "jake" (case-insensitive)
  if (inputValue.toLowerCase() === "adones") {
    // Stop the form from actually submitting/refreshing
    event.preventDefault();

    // Show the alert message
    alert('Hell Yeah! Adones 🗿');
  }

  else if (inputValue.toLowerCase() === "joffrey") {
    event.preventDefault();
    alert("Ah Hell Nah! Joffrey ain't the Boss")
  }

  else {
    alert("Try again, you were close")
  }
});

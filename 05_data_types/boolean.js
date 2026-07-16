"use strict";

// Boolean
// Boolean data type consist of only two values True or False
// This type is used to store yes/no values (True or False) or returned by a comparison expression

// Select the elements from the webpage
const firstNum = document.getElementById("firstNumber");
const secondNum = document.getElementById("secondNumber");
const submitBtn = document.getElementById("submitBtn");

// Listen for a click event on the button
submitBtn.addEventListener("click", () => {
  // Access the value entered by the user

  const boolean_value = firstNum.value > secondNum.value;
  if (boolean_value === 2 > 1) {
    // console.log(`the number ${firstNum} is greater than ${secondNum}`);
    alert(`the number ${firstNum.value} is greater than ${secondNum.value}`);
  } else {
    // console.log(`No, the number ${firstNum.value} isn't greater than ${secondNum.value}`)
    alert(
      `No, the number ${firstNum.value} isn't greater than ${secondNum.value}`,
    );
  }
});

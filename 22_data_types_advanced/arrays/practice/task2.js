
/*
Write the function sumInput() that:

    Asks the user for values using prompt and stores the values in the array.
    Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
    Calculates and returns the sum of array items.

P.S. A zero 0 is a valid number, please don’t stop the input on zero.
*/

function sumInput() {
  let values = [];

  while (true) {

    let value = prompt("A number please?", 0);

    // should we cancel?
    if (value === "" || value === null || !isFinite(value)) break;

    values.push(+value);
  }

  let sum = 0;
  for ( let value of values ) {
    sum += value;
  }
  return sum
}

alert( sumInput() )
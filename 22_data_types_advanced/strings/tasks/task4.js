
// We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.
// Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.

function extractCurrencyValue(str) {
  let cleaned = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    
    if ((char >= '0' && char <= '9') || char === '.') {
      cleaned += char; // Append valid characters to our result
    }
  }

  return cleaned === '' ? NaN : Number(cleaned);
}

console.log(extractCurrencyValue('$100'));   // 100
console.log(extractCurrencyValue('50'));     // 50
console.log(extractCurrencyValue('j50'));    // 50
console.log(extractCurrencyValue('50j'));    // 50
console.log(extractCurrencyValue('$19.99')); // 19.99
console.log(extractCurrencyValue('abc'));    // NaN
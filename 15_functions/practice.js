function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return 'Did parents allow you?';
  }
};
function checkAge2(age) {
  return (age > 18) ? true:'Did parents allow you?';
};
function checkAge3(age) {
  return (age > 18) || 'Did parents allow you?'
};
function min(a, b) {
  return (a < b) ? a : b;
};
function power(n, x) {
  return n ** x;
};


console.log(checkAge(16))
console.log(checkAge2(16))
console.log(checkAge3(16))
console.log(checkAge(19))
console.log(checkAge2(19))
console.log(checkAge3(19))

console.log("Checking Min Function");
console.log(min(20, 11));

console.log("Checking Power Function");
console.log(power(2, 4))
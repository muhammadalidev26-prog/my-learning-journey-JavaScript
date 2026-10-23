
function square(n) {
	if ( typeof n != 'number' ) return;
	return Math.pow(n, 2);
}

function isEven(n) {
  return n % 2 === 0;
}

function maxOfThree(a, b, c) {
  if (a > b && a > c) return a;
  if (b > c) return b;
  return c;
}

function repeatText(text, times) {
  let result = "";
  for (let i = 0; i < times; i++) {
    result += text;
  }
  return result;
}


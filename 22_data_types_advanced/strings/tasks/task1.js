
// Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:

function ucFirst( str ) {
  if (!str) return str; // if the string is empty it would simply return the string
  
  let ucStr = '';
  ucStr += str[0].toUpperCase();
  ucStr += str.slice(1);
  return ucStr
}

console.log( ucFirst('jake') )
console.log( ucFirst('jake paul is a great guy') )

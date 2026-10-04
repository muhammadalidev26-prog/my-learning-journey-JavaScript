// Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – 
// replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

function truncate(str, maxLength) {
  if (str.length < maxLength) return str;

  return `${str.substr(0, maxLength - 1)}...`
}

console.log( truncate('jake is a person', 10) )
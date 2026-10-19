
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

function camelize( str ) {  
  return (str.split('-').map( (item, index) => {
      return index == 0 ? item : item[0].toUpperCase() + item.slice(1) }).join(''))
}

let str = camelize('jake-paul-is-a-person');
console.log( str );

console.log( camelize('why-are-you-gay') )
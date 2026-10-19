
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

function camelize( str ) {
  let arr = str.split('-');
  let camelizedStr = arr.map( (item, index) => {
    if (!index==0) return item.charAt(0).toUpperCase() + item.slice(1)
  })
  
}

camelize('jake-paul-is-a-person')
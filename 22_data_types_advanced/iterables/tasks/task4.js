// should log "html: 90", "css: 85", etc. one per loop
let skills = { html: 90, css: 85, js: 60, react: 20 };

// let keys = Object.keys( skills )
// for (let key of keys) {
//   console.log( `${key}: ${skills[key]}`)
// }

skills[Symbol.iterator] = function() {
  let keys = Object.keys( this );
  let index = 0;
  let obj = this;

  return {
    next() {
      if (index <= keys.length) {
        let key = keys[index++];
        let value = obj[key];
        return {done: false, value: `${key}: ${value}`}
      } else {
        return {done: true}
      }
    }
  }
}

for (let skill of skills) {
  console.log( skill )
}


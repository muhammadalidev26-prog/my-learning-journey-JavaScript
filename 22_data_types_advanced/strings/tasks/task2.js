// Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

function checkSpam( str ) {
  let lowerStr = str.toLowerCase()

  return lowerStr.includes('viagra') || lowerStr.includes('xxx')
} 

console.log( checkSpam('jake') )
console.log( checkSpam('xxx videos') )
console.log( checkSpam('jake\'s xxx videos') )

// By the way this wasn't my idea to do something like this but I got this challenge from: https://javascript.info/string#check-for-spam

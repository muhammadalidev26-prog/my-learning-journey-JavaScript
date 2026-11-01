
// Global Object
// The global object provides variables and functions that are available anywhere. By default, those that are built into the language or the environment.

// All properties of the global object can be accessed directly:

window.alert('Accessing alert via Window')

// Global variables are declared with var not let/const

var name = 'Jake Paul'
console.log(window.name)

// We use the global object to test for support of modern language features.

if (!window.Promise) {
	console.log('Your browser is very old')
} else {
	console.log('Modern Browser')
}
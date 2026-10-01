
// Var Let Const - comparison

let user = 'harsh';;
let userAccount = `${user}9009`;

console.log(`you are ${user}, your account is ${userAccount}`);

var userMail = 'harsh@gmail.com';
console.log(`${userMail} - Added in Window, is function scoped `);

var userMail = 'harsh#jakepaul.com';
console.log(`${userMail} - Added in Window, is function scoped `);

console.log('------------------------------------------------------------------------')

// Scope - global, block, functional

function jakeCake() {
  let jake = 'insideFunction - hence Functional'; // functional - Can't access it outside the function
  return jake;
}

let jake = 'outSideFunction - hence Global'; // Defined Globally, can be accessed anywhere

{
  let blockVariable  = 'insideCurlyBraces - hence Block' // can't be accessed outside the block
};

console.log(jakeCake());
console.log(jake);
// console.log(blockVariable) // Error not defined


function namePerson() {
  if (1099 > 1) {
    var functionVar = 10;
    let functionVar2 = 10;
  }
  console.log(functionVar)
  // console.log(functionVar2) // Error, functionVar2 isn't accessible outside the block( curly braces )
} 

namePerson();


console.log('-------------------------------------TDZ---------------------------------------');

// Temporal Dead Zone
// It is a specific period during code execution where a variable exists but cannot be accessed.

// NOTE: If the variable gets declared with 'var' keyword the call won't return error but Undefined
// console.log(notDefinedYet); // Using variable before it's declared - ERROR if declared using 'let' undefined if declared with 'var'
let notDefinedYet = 'Defined below the call';

console.log('-----------------------------------Hoisting-----------------------------------------');
// Hoisting
// a varibale is js gets divided into two parts, the declaration and the initialization, the declaration parts moves to the top of the page while the initialization parts remains where it is
var a = 12; // would become var b; (at top of page) and a = 12 on current line
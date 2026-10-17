// if else if else

let age = 27;
let message;
if (age) {
  if (age <= 9) {
    message = "Hey, Kid";
  } else if (age <= 13) {
    message = "Hey, Young Man";
  } else if (age <= 17) {
    message = "Hello, sir nice to meet you";
  } else {
    message = "Salam Sir";
  }
}

console.log(message);

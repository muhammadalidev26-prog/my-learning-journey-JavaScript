
// There is an array of messages
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

// The question now is: which data structure you’d suggest to store the information: “when the message was read?”.

let dateRead = new WeakMap();
dateRead.set(messages[0], new Date(2017, 1, 1));

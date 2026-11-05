// Create a decorator delay(f, ms) that delays each call of f by ms milliseconds.

function delay(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

let log = delay(console.log, 2000);

log("jake"); // Works

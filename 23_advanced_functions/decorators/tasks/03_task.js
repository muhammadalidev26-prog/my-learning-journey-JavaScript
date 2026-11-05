/**
The result of debounce(f, ms) decorator is a wrapper that suspends calls to f until there’s ms milliseconds of inactivity (no calls, “cooldown period”), then invokes f once with the latest arguments.

In other words, debounce is like a secretary that accepts “phone calls”, and waits until there’s ms milliseconds of being quiet. And only then it transfers the latest call information to “the boss” (calls the actual f).

For instance, we had a function f and replaced it with f = debounce(f, 1000).

Then if the wrapped function is called at 0ms, 200ms and 500ms, and then there are no calls, then the actual f will be only called once, at 1500ms. That is: after the cooldown period of 1000ms from the last call.
 */

function debounce(fn, delay) {
  let timerID;

  return function () {
    clearTimeout(timerID);
    timerID = setTimeout(() => fn.apply(this, arguments), delay);
  };
}

function reportNewWidth() {
  console.log("New width:", window.innerWidth);
}

const Resize = debounce(reportNewWidth, 500);

window.addEventListener("resize", Resize);

// Create a decorator spy(func) that should return a wrapper that saves all calls to function in its calls property.

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }
  wrapper.calls = [];
  return wrapper;
}

function work(a, b) {
  return a + b;
}

work = spy(work);

console.log(work(1, 4));
console.log(work(21, 14));

console.log(work.calls);

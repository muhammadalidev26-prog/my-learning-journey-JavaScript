// When passing object methods as callbacks, for instance to setTimeout, there’s a known problem: “losing this”.

let user001 = {
  name: "jake",
  age: "18",
  sayHi() {
    console.log(`Hi ${this.name}`);
  },
};

// the task is tot make sure the function is called with right context

// Solution 1: Wrapper

setTimeout(function() {
  user001.sayHi(); // called inside wrapper function
}, 2000);

// It works but there is a problem, what if the value of user changes within that 1 second delay


// Solution 2: 
// Functions provide a built-in method bind that allows to fix this.
// let boundFunc = func.bind(context);

let sayHi = user001.sayHi.bind(user001);

setTimeout(sayHi, 2500) // works even if the value of user changes





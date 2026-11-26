

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed=1) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

let animal = new Animal("My animal");

// The syntax to extend another class is: class Child extends Parent.

class Rabbit extends Animal {

  constructor(name, earLength) {
    // we must call super() constructor before using this in child class
    super(name)
    this.earLength = earLength;
  }

  hide() {
    console.log(`${this.name} hides`)
  }
  // overriding a method
  // if we create stop() method here it would override the parent's method and we don't want to do that but rather build on top of it
  stop() {
    super.stop();
    this.hide();
  }
}
/*
  super.method(...) to call a parent method.
  super(...) to call a parent constructor (inside our constructor only).
**/

let rabbit = new Rabbit("White Rabbit", 10);
rabbit.run(5);
rabbit.stop();


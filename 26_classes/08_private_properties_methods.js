
class CoffeeMachine {
  #waterAmount = 0;      // PRIVATE (#): enforced by JS, only this class can touch it
  _temperature = 90;     // PROTECTED (_): just a convention, "please don't touch from outside"

  constructor(power) {
    this._power = power; // set once here, never changed afterwards
  }

  // READ-ONLY: getter but no setter, so outsiders can read but not change
  get power() {
    return this._power;
  }

  // GETTER/SETTER: looks like a normal property, but we control every write
  get waterAmount() {
    return this.#waterAmount;
  }
  set waterAmount(value) {
    if (value < 0) value = 0; // rule: water can never be negative
    this.#waterAmount = value;
  }

  // PUBLIC METHOD: the "button" outsiders are allowed to press
  brew() {
    if (this.#waterAmount < 50) return "Not enough water";
    this.#waterAmount -= 50;
    return `Coffee ready at ${this._temperature}C`;
  }
}

// A child class: can use protected (_), cannot use private (#)
class MegaCoffeeMachine extends CoffeeMachine {
  boost() {
    this._temperature = 95;        // OK: protected is inherited
    // this.#waterAmount = 500;    // SyntaxError: private is NOT inherited
  }
}

const machine = new CoffeeMachine(100);

machine.waterAmount = -10;
console.log(machine.waterAmount); // 0     -> setter fixed the bad value

machine.waterAmount = 120;
console.log(machine.brew());      // Coffee ready at 90C
console.log(machine.waterAmount); // 70

machine.power = 999;              // silently ignored (no setter)
console.log(machine.power);       // 100   -> still unchanged

// machine.#waterAmount = 5;      // SyntaxError: private, can't touch from outside

const mega = new MegaCoffeeMachine(200);
mega.boost();
mega.waterAmount = 100;
console.log(mega.brew());         // Coffee ready at 95C
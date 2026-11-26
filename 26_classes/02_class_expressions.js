
// Class expressions

let newClass = class Butterfly {
  logRandomNumber() {
    console.log(Math.trunc(Math.random() * 10))
    console.log( Butterfly ) // class name only visible inside the class
  }
}

let a = new newClass();
a.logRandomNumber();

// Dynamic On-demand classes
function makeClass() {

  return class {
    brother() {
      console.log("brother")
    }
    generateRandomWord() {
      const randomWords = [
        "apple", "breeze", "candle", "dolphin", "eclipse",
        "feather", "glacier", "harmony", "island", "journey",
        "kitchen", "lantern", "mountain", "nebula", "orchard",
        "puzzle", "quartz", "rainbow", "shadow", "thunder",
        "umbrella", "velvet", "whisper", "xylophone", "zephyr"
      ];
      const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
      console.log( randomWord )
    }
  }
}

let user003 = makeClass(); // it returns a class not a instance
user003 = new user003; // instantiating the class using new keyword
user003.generateRandomWord();
// Getters/setters can be used as wrappers over “real” property values to gain more control over operations with them.

let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if(value.length < 4) {
      console.log( "too short name..");
      return;
    }
    this._name = value;
  }
};


user.name = "" // too short name

user.name = "John"

console.log( JSON.stringify(user, null, 2) )
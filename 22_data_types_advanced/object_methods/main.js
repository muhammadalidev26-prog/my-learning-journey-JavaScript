

let poor = 'Lazy asshole'
let user001 = {
	name: 'jake',
	age: 18,
	height: 1.75,
	status: poor
}

console.log( Object.keys( user001 ));
console.log( Object.values( user001 ));
console.log( Object.entries( user001 ));

let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
	Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
);

console.log(doublePrices);
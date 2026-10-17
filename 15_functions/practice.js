
function cmToMSquare(cm) {
    return ( (cm / 100) ** 2 );
}

function LbtoKg(lb) {
  return ( lb / 2.205 );
}

function BMI(weightInLB, heightInCM) {
  return +( (LbtoKg( weightInLB ) / cmToMSquare( heightInCM )).toFixed(2) )
}

console.log( BMI(143, 178) ) // BMI Calculator

// Rest parameters
function addAll(...values) { // the values would be stored as an array
  let sum = 0;
  for (let value of values) {
    sum += value;
  }
  return sum;
}

console.log( addAll(1,2,3,9,7) ); // 22

(function() {
  console.log('person is a person')
}) ()

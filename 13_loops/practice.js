
let i = 0;
for (; i < 10; i++) {
  console.log( i )
}

let age = 1;
while ( age <= 12 ) {
  console.log( `current age is ${age} `);
  age++;
}

// We use do while when we want to execute a piece of code at least once even if the condition might not be true

do {
  console.log( 'condition wrong yet still ran')
} while ( 1 == 0 ); // wrong condition but the code still ran

// print all numbers between 1 and 50 that are divisible by three
for ( i=1; i<=50; i++) {
  if ( !(i % 3 == 0) ) {
    continue
  }
  console.log(i)
}
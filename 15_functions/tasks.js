
function multiply(a, b) {
  return a*b;
}

multiply = (a,b) => a*b;

function totalScore(...score) {
  let totalScore = 0;
  for (let i of score) { totalScore += i}
  return totalScore
}

let score = totalScore(10, 20, 30)
console.log( score )

let square = (n) => n**2;

console.log( square(9) ) // 81

console.log('---------------------------------------')

function calculateDiscount( discount ) {
  return (price) => {
    price -= price * (discount/100);
    return price;
  }
}

let discounter = calculateDiscount(15);
let finalPrice = discounter(200);
console.log(finalPrice)


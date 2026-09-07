const btn = document.getElementById("btn");
const container = document.getElementById("container");
let a = "jake";
var b = "person";

btn.addEventListener("click", handleClick);

function handleClick(e) {
  if (btn.innerText == "updated") {
    btn.innerText = "CLICK ME";
    container.innerText = "";
    return;
  }

  let text = "updated";
  btn.innerText = text;

  handleContainer();
}

function handleContainer() {
  let content = "the button has been updated";
  container.innerText = content;
}
function calculateTotal(price, quantity) {
  console.log('price:', price, 'quantity:', quantity); // check inputs
  
  let total = price * quantity;
  console.log('total before tax:', total); // check intermediate value
  
  total = total + (total * 0.1);
  console.log('total after tax:', total); // check final value
  
  return total;
}

calculateTotal(10, "3");


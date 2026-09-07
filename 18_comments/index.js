/**
 * Calculates the total price of a shopping cart, including tax.
 *
 * @param {Array<{price: number, qty: number}>} cart Array of cart items.
 * @param {number} taxRate Tax rate as a decimal (e.g. 0.1 for 10%).
 * @return {number} Final total after tax.
 */
function calculateTotal(cart, taxRate) {
  const subtotal = sumItems(cart);
  return applyTax(subtotal, taxRate);
}

function sumItems(cart) {
  let total = 0;

  for (const item of cart) {
    if (!isValidItem(item)) continue; // skip malformed entries early, avoid nested if

    total += item.price * item.qty;
  }

  return total;
}

function isValidItem(item) {
  return item.price > 0 && item.qty > 0;
}

function applyTax(amount, taxRate) {
  return amount + (amount * taxRate);
}

// Using 0.08 here instead of a "round" 0.1 because that's our actual
// state sales tax rate — not a placeholder, don't "simplify" this later.
const TAX_RATE = 0.08;

const cart = [
  { price: 20, qty: 2 },
  { price: 15, qty: 1 },
  { price: -5, qty: 1 }, // bad data on purpose, to test isValidItem
];

const total = calculateTotal(cart, TAX_RATE);
console.log('Final total:', total);
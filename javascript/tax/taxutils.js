const taxRate = 5;

function calculateTax(price) {
  return price * taxRate;
}

module.exports = { calculateTax, taxRate };

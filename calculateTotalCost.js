function calculateTotalCost(price, quantity, taxRate) {
  if (
    typeof price !== "number" ||
    typeof quantity !== "number" ||
    typeof taxRate !== "number"
  ) {
    return "Invalid input.";
  }

  return (price * quantity) * (1 + taxRate);
}

function handleCost() {
  const price = parseFloat(document.getElementById("price").value);
  const quantity = parseFloat(document.getElementById("quantity").value);
  let taxRate = parseFloat(document.getElementById("taxRate").value);

  // Use Michigan's default tax rate if field is empty or invalid
  if (isNaN(taxRate)) {
    taxRate = 0.06;
  }

  const result = calculateTotalCost(price, quantity, taxRate);
  document.getElementById("result").innerText = `Total Cost: $${result.toFixed(2)}`;
}

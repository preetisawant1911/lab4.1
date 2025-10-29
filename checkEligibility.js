function checkEligibility(age, isEmployed) {
  if (typeof age !== "number" || typeof isEmployed !== "boolean") {
    return "Invalid input.";
  }

  return age >= 18 && isEmployed ? "Eligible" : "Not eligible";
}

function handleEligibility() {
  const ageInput = document.getElementById("age").value;
  const age = parseFloat(ageInput);
  const isEmployed = document.getElementById("employment").checked;

  const result = checkEligibility(age, isEmployed);
  document.getElementById("result").innerText = result;
}

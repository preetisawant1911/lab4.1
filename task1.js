function formatFullName(firstName, lastName) {
  if (!firstName || !lastName) {
    return "Invalid name input.";
  }

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  return `${capitalize(lastName)}, ${capitalize(firstName)}`;
}

function handleFormat() {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const result = formatFullName(firstName, lastName);
  document.getElementById("result").innerText = result;
}

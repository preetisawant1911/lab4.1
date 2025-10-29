function evaluateGrade(score) {
  if (typeof score !== "number" || isNaN(score) || score < 0 || score > 100) {
    return "Invalid score";
  }

  if (score >= 90) return "Grade: A";
  if (score >= 80) return "Grade: B";
  if (score >= 70) return "Grade: C";
  if (score >= 60) return "Grade: D";
  return "Grade: F";
}

function handleGrade() {
  const score = parseFloat(document.getElementById("score").value);
  const result = evaluateGrade(score);
  document.getElementById("result").innerText = result;
}

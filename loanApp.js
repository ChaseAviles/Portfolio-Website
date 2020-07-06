// Listen for submit
document.getElementById("loan-form").addEventListener("submit", function (e) {
  document.getElementById("results").style.display = "none";

  document.getElementById("loading").style.display = "block";

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

function calculateResults() {
  // UI variables
  const loanAmount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  const principle = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 1200;
  const calculatedYears = parseFloat(years.value) * 12;

  // Compute Monthly Payment
  const x = Math.pow(1 + calculatedInterest, calculatedYears);
  monthly = (principle * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedYears).toFixed(2);
    totalInterest.value = (monthly * calculatedYears - principle).toFixed(2);
    document.getElementById("loading").style.display = "none";
    document.getElementById("results").style.display = "block";
  } else {
    showError("Please check your numbers");
  }
}

function showError(error) {
  // create a div
  const errorDiv = document.createElement("div");

  // Get elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  // Add class
  errorDiv.className = "alert alert-danger";

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  document.getElementById("loading").style.display = "none";

  setTimeout(clearError, 2500);
}

function clearError() {
  document.querySelector(".alert").remove();
}

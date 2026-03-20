// Function for "Click Me" button
function showMessage() {
  const message = document.getElementById("message");
  message.textContent = "Hello! You clicked the button.";
  message.style.color = "#2563eb";
  message.style.fontWeight = "600";
}

// Function for "Add Numbers" button
function addNumbers() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = document.getElementById("result");

  if (isNaN(num1) || isNaN(num2)) {
    result.textContent = "Please enter valid numbers!";
    result.style.color = "red";
    result.style.fontWeight = "600";
    return;
  }

  const sum = num1 + num2;
  result.textContent = `Result: ${sum}`;
  result.style.color = "#16a34a";
  result.style.fontWeight = "600";
}
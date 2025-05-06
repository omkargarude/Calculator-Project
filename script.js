// Get the display element
let display = document.getElementById("display");

// Append clicked value to display
function appendValue(value) {
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = "";
}

// Calculate square of the current value
function square() {
  if (display.value !== "") {
    display.value = Math.pow(eval(display.value), 2);
  }
}

// Perform calculation using eval
function calculate() {
  try {
    // Replace % with modulo operator
    let expression = display.value.replace('%', '%');
    // Evaluate the expression
    display.value = eval(expression);
  } catch (error) {
    display.value = "Error";
  }
}

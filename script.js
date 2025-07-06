// Get the target element
const element = document.getElementById("level");

let level = 0;
let current = element;

// Traverse up through parent elements
while (current) {
  level++;
  current = current.parentElement;
}

// Show the result
alert("The level of the element is: " + level);

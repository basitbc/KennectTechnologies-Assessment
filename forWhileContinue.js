// ===================== FOR LOOP =============================

// A loop that repeats a block of code a fixed number of times
// In this example, we use a for loop to iterate over a range of numbers from 0 to 4

for (let i = 0; i < 5; i++) {
  console.log(i); // Output the current value of i to the console (0, 1, 2, 3, 4)
}

// ===================== WHILE LOOP =============================

// A loop that repeats a block of code as long as a condition is true
// In this example, we use a while loop to do the same thing as the for loop above

let j = 0; // Set an initial value for j
while (j < 5) {
  // Continue looping as long as j is less than 5
  console.log(j); // Output the current value of j to the console (0, 1, 2, 3, 4)
  j++; // Increment j by 1
}

// ===================== CONTINUE STATEMENT =============================

// A statement that skips over the current iteration of a loop and continues to the next one
// In this example, we use a for loop to iterate over a range of numbers from 0 to 4
// We use a continue statement to skip over the value 2 and continue with the next iteration

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    // If the current value of i is 2
    continue; // Skip this iteration and continue with the next one
  }
  console.log(i); // Output the current value of i to the console (0, 1, 3, 4)
}

// ===================== FOR LOOP =============================

// If-else statement: a statement that performs different actions based on a condition
// In this example, we use an if-else statement to check the value of a variable and perform different actions based on its value
const x = 10; // Set the value of x to 10
if (x < 0) {
  // If x is less than 0
  console.log('Negative number'); // Output "Negative number" to the console
} else if (x === 0) {
  // Otherwise, if x is equal to 0
  console.log('Zero'); // Output "Zero" to the console
} else {
  // Otherwise
  console.log('Positive number'); // Output "Positive number" to the console
}
// Output: "Positive number"

// ===================== FOR LOOP =============================

// Switch statement: a statement that performs different actions based on the value of a variable or expression
// In this example, we use a switch statement to check the value of a variable and perform different actions based on its value
const y = 'green'; // Set the value of y to "green"
switch (
  y // Check the value of y
) {
  case 'red': // If y is "red"
    console.log('Stop'); // Output "Stop" to the console
    break; // Exit the switch statement
  case 'yellow': // If y is "yellow"
    console.log('Caution'); // Output "Caution" to the console
    break; // Exit the switch statement
  case 'green': // If y is "green"
    console.log('Go'); // Output "Go" to the console
    break; // Exit the switch statement
  default: // If y is none of the above values
    console.log('Unknown'); // Output "Unknown" to the console
}
// Output: "Go"

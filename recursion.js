// ========================== RECURSION ===================================

// Recursion is a programming technique where a function calls itself to solve a problem.
// This technique is useful for solving problems that can be broken down into smaller sub-problems.
// Recursion allows you to write elegant and concise code, especially for tasks that involve traversing
// complex data structures like trees or graphs.

function factorial(n) {
  // Base case: if n is less than or equal to 1, return 1
  if (n <= 1) {
    return 1;
  } else {
    // Recursive case: call the factorial function with n-1 as the argument, and multiply the result by n
    return n * factorial(n - 1);
  }
}

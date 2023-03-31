// ===================================  CLOSURE  ==================================

// a function that is defined inside another function (or in the global scope) is able to access variables
// in its parent scope, even after the parent function has finished executing.

function outerFunction() {
  const outerVariable = 'I am outer!';

  function innerFunction() {
    const innerVariable = 'I am inner!';

    console.log(outerVariable); // logs "I am outer!"
    console.log(innerVariable); // logs "I am inner!"
  }

  return innerFunction;
}

const inner = outerFunction(); // returns a reference to innerFunction
inner(); // invokes innerFunction

// In this code, outerFunction is a function that defines a variable called outerVariable and a nested function called innerFunction.

// InnerFunction defines a variable called innerVariable, and logs both outerVariable and innerVariable to the console.

// OuterFunction returns a reference to innerFunction, so when we call outerFunction and
// assign the result to a variable called inner, inner is a reference to the innerFunction nested inside outerFunction.

// Finally, we call inner(), which invokes innerFunction. Because of the closure created by outerFunction,
// innerFunction has access to the outerVariable variable defined in its parent scope,
// even though that scope has already been popped off the call stack. This means that innerFunction is able to log the value of
// outerVariable to the console, even though outerFunction has already finished executing.

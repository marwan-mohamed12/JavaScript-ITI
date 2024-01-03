#Ex3:

- a closure is created when a function is defined inside another function, allowing the inner function to access variables from its outer (enclosing) function even after the outer function has finished execution. This behavior is possible due to the lexical scoping nature of JavaScript.

```jsx
function outerFunction(outerVariable) {
  // Inner function defined inside the outer function
  function innerFunction(innerVariable) {
    // Accessing variables from both outer and inner functions
    console.log(`Outer Variable: ${outerVariable}`);
    console.log(`Inner Variable: ${innerVariable}`);
  }

  // Returning the inner function from the outer function
  return innerFunction;
}

// Creating an instance of the outer function
const closureExample = outerFunction("Outer Value");

// Invoking the inner function from the returned closure
closureExample("Inner Value");
```

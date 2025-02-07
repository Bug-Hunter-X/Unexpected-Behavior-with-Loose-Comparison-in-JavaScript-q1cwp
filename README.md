# Unexpected Behavior with Loose Comparison in JavaScript

This repository demonstrates a common error in JavaScript stemming from loose comparison (==) when dealing with null and undefined values.

## The Bug

The `foo` function is intended to return 0 if the input is null, -1 if it's negative, and 1 otherwise. However, due to loose comparison, `undefined` is treated as a falsy value and the `else` block is executed, returning 1 instead of appropriately handling the undefined case.

## Solution

The solution involves using strict comparison (===) to explicitly check for null and undefined, ensuring the function behaves as expected under all circumstances.  The solution also provides an improved error handling mechanism, offering more informative messages and improved code clarity.

## How to Run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` to see the flawed and improved code, respectively.
3. Run the JavaScript files using Node.js (or a similar JavaScript runtime).
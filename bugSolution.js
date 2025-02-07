function foo(x) {
  if (x === null) {
    return 0; 
  } else if (x === undefined) {
    throw new Error('Undefined input is not allowed.');
  } else if (x < 0) {
    return -1; 
  } else {
    return 1; 
  }
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Throws an error
console.log(foo(-1)); //Output: -1
console.log(foo(1)); //Output: 1
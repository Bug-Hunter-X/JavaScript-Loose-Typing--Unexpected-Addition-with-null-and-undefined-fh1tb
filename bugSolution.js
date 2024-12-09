function foo(a, b) {
  // Handle undefined and null values
  a = (typeof a === 'undefined') ? 0 : a;
  b = (typeof b === 'undefined') ? 0 : b;
  //Explicitly convert to numbers
  a = Number(a)
  b = Number(b);
  return a + b;
}

console.log(foo(undefined, 1)); // 1
console.log(foo(null, 1)); // 1
console.log(foo(1, undefined)); // 1
console.log(foo(undefined, undefined)); // 0
console.log(foo(null, null)); // 0
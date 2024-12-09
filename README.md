# JavaScript Loose Typing Bug

This example demonstrates an issue arising from JavaScript's loose typing system, specifically when performing addition operations with `null` and `undefined` values.

## Bug Description
The `foo` function adds two numbers together. However, if one of the inputs is `undefined` or `null`, unexpected results may occur.

- If one of the numbers is `undefined`, `NaN` (Not a Number) is returned.
- If one of the numbers is `null`, it's treated as `0`, and the addition proceeds as expected.

This behavior is a consequence of JavaScript's automatic type coercion during arithmetic operations.

## Solution
The best practice is to add explicit null and undefined checks to the function.
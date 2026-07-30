// Single quotes
let a = 'hello';

// Double quotes
let b = "world";

// Backticks / Template literals
let name1 = "Alice";
let msg = `Hello, ${name1}! 2 + 2 = ${2 + 2}`;
console.log(msg); // Output: Hello, Alice! 2 + 2 = 4

// Multi-line strings using backticks
let report = `
    Test: Login
    Status: Passed
    Duration: 1 hr
`;
console.log(report);

// Using String Interface
console.log(String(200)); // "200"

console.log(String(true)); // "true"

console.log(String(null)); // "null"

console.log(String([1, 2])); // "1,2"

console.log(String(undefined)); // "undefined""

console.log(String({})); // "[object Object]"

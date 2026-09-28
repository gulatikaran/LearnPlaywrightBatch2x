// Checking Arrays

// check if something IS an array

let result = Array.isArray([1, 2, 3]);
console.log(result); // true

let result1 = Array.isArray("a");
console.log(result1); // false


// every & some
[80, 90, 95].every(s => s >= 70); // true
[80, 60, 95].every(s => s >= 70); // false
// here 's' is a temprary variable so no need to initialize

// Playwright API
let status = [200, 201, 200].every(statusCode => statusCode > 200);
// here 'statusCode' is a temprary variable so no need to initialize
console.log(status); // false

// Some - AT LEAST ONE must pass
[80, 60, 85].some(s => s < 70); // true
[80, 90, 85].some(s => s < 70); // false
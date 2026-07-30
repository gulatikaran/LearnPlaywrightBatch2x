// A Pure function always return the same output for the same input and does not have any side effects.

// Pure Functions- No side effects, always return the same output for the same input i.e. predictable output.
function calculatePassRate (total, passed) {
    return ((passed / total) * 100).toFixed(2);    
}

console.log(calculatePassRate(10, 7)); // 70.00
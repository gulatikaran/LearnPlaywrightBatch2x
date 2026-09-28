interface Calculator {
    add(a: number, b: number): number; // Incomplete function
    substract(a: number, b: number): number;
    multiply(a: number, b: number): number;
}

const calc: Calculator = {
    add: (a, b) => a + b, // Use/complete them
    substract: (a, b) => a - b,
    multiply: (a, b) => a * b,
}

console.log(calc);

// Output:
// {
//   add: [Function: add],
//   substract: [Function: substract],
//   multiply: [Function: multiply]
// }
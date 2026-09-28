let name = "Karan";

let single = 'Hello, my name is ' + name;
let double = "Hello, my name is " + name;
let backtick = `Hello, my name is ${name}`;

console.log(single);
console.log(double);
console.log(backtick);

let product = "Laptop";
let price = 50000;

//Old way (using + to combine strings)
let oldway = "The " + product + " costs " + price + " rupees.";
console.log(oldway); // The Laptop costs 50000 rupees.

//New way (using template literals)
let newway = `The ${product} costs ${price} rupees.`;
console.log(newway); // The Laptop costs 50000 rupees.


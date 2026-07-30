function print() {
    console.log("Normal Function is called.");
}

function placeOrder(item, pramodCallback) {
    console.log("Hi, Your order is placed.");
    pramodCallback();
}

// First way - Directly passing the function
placeOrder("Pizza", print);

console.log("-------------------------");

// Second way - Using Anonymous function
placeOrder("Burger", function() {
    console.log("Anonymous Function is called.");
});

console.log("-------------------------");

// Third way - Using Arrow function
placeOrder("Pasta", () => {
    console.log("Arrow Function is called.");
});
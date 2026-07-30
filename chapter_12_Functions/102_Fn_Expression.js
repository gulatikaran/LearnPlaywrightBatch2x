const greet = function(name) {
    return `Hello, ${name}`;
}

let r = greet("Pramod");
console.log(r); // Hello, Pramod


// Type 4 Normal Function
function greet1(name1) {
    return `Hello, ${name1}`;
}
console.log(greet1("Bob"));

//or

// Function as Expression
const greet2 = function (name2) {
    return `Hello, ${name2}`;
}
console.log(greet2("Bob"));

// Type 4 Normal Function
const greet = function(name) {
    return "Hi " + name;
}

let result = greet("Pramod");
console.log(result); // Hi Pramod


// Using Arrow Function
const greet2 = (name1) => "Hi " + name1;
let r2 = greet2("Pramod");
console.log(r2); // Hi Pramod

// Another eg:
const doubleIt = n => n * 2;
console.log(doubleIt(10)); // 20

const printIt = name => console.log(name);
printIt("Dutta"); // Dutta

// Another eg:
function add(a, b) {
    return a + b;
}

const add2 = (a, b) => a + b;
console.log(add2(10, 5)); // 15

// Another eg:
function say() {
    console.log("Hi");
}

const say1 = () => console.log("Hi");
say1(); // Hi

// or

const say2 = () => ("Hi 2");
console.log(say2()); // Hi 2

const greet3 = (name) => {
    const message = "Hi" + name;
    return message;

}
console.log(greet3("Karan"));
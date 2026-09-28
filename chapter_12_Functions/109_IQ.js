// Returns a value
// function getStatus(code) {
//     if (code >= 200 && code < 300) return "success";
//     if (code >= 400 && code < 500) return "client error";
//     if (code >= 200 && code < 300) return "server error";
// }

// getStatus(200);
// getStatus(404);
// getStatus(500);

// Another Que:
function logTest(name) {
    console.log(`Running: ${name}`);
    // no return statement
}

let result = logTest("Login");
console.log(result); 
// Running: Login
// undefined


// Another Que:
greet('Alice');

function greet(name) {
    return `Hello, ${name}!`;
} 
// returns no error because calling can be done before define as this is a normal function


// Another Que:
sayHi("Bob");

const sayHi = function(name) {
    return `Hi, ${name}!`;
};
// returns reference error as calling can not be done before define as this is a function as an expression
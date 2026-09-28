
// let is block-scoped,
let a = 10;

let retryCount = 0;
retryCount = retryCount + 1; //reassignment allowed
retryCount = retryCount + 1; //reassignment allowed
console.log("Retry attempt:", retryCount);


//let retryCount = 5; // SyntaxError: Identifier 'retryCount' has already been declared

//SyntaxError: redeclaration  not allowed

let testStatus = "pending";
if (testStatus === "pending") {
let executionTime = 1200;
console.log("Inside block:", executionTime);
}

//console.log("Outside block:", executionTime); // ReferenceError: executionTime 
// is not defined
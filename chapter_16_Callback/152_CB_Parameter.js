function greetTester(name, callback) {
    console.log("Welcome, " + name);
    callback();
}

greetTester("Dev", function() {
    console.log("Let's start testing!");
});

// OR

greetTester("Dev", () => {
    console.log("Let's start testing!");
});

console.log("------------");

// Callback with paramters
function runTest(testName, callback) {
    let status = "PASS";
    callback(testName, status);
}

runTest("Login Test", function(testName, status) {
    console.log(testName + " -> " + status);
});

console.log("------------");

// Sync Callback - forEach
let bugs = ["UI glitch", "API timeout", "Wrong redirect"];

bugs.forEach(function(bug, i) {
    console.log("Bug #" + (i + 1) + ": " + bug);
});

console.log("Total bugs: " + bugs.length);


// Async Callback
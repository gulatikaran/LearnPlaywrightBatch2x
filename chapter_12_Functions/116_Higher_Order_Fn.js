// Higher-Order Functions
// A higher-order function is a function that takes another function as an argument, or returns a function as a result.

function runWithLoggin(testFn, testName) {
    console.log(`Starting: ${testName}`);
    let result = testFn();
    console.log(`Finished: ${testName} -> ${result}`);
    return result;
}

function loginTest() {
    return "Pass";
}

function loginTestFAILED() {
    return "Fail";
}

runWithLoggin(loginTest, "Login Test");
runWithLoggin(loginTestFAILED, "Dashboard Failed Test");

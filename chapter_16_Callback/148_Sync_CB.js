let testResults = ["Pass", "Fail", "Pass", "Skip"];

testResults.forEach(function (result, index) {
    console.log("Test " + index + " => " + result);
});

// This is a prefect example of a synchronous callback
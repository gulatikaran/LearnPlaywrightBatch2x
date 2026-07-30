// In Promise.all, if ayone if failed then we will fait it.

let checkAuth = Promise.resolve("Auth ok");
let checkDB = Promise.resolve("DB ok");
let checkCache= Promise.resolve("Cache ok");

Promise.all([checkAuth, checkDB, checkCache]).then(
    function (results) {
        console.log("All the checks are fine!");
        console.log(results); 
    }
) 
// All the checks are fine!
// [ 'Auth ok', 'DB ok', 'Cache ok' ]



Promise.all([
    Promise.resolve("ok"),
    Promise.resolve("DB Down"),
    Promise.resolve("ok")
]).then(function(r){
    console.log(r);
}).catch(function (error){
    console.log("Failed:", error);
}) // [ 'ok', 'DB Down', 'ok' ]



Promise.all([
    Promise.resolve("ok"),
    Promise.reject("DB Down"),
    Promise.resolve("ok")
]).then(function(r){
    console.log(r);
}).catch(function (error){
    console.log("Failed:", error);
}) // Failed: DB Down


// All settled: Does not matter if anyone failed or passed, the answers will still run.
// Eg: We can use it in Test Case.
// This is like a test report- you want results for All tests,
// not just stop at the first failure

Promise.allSettled([
    Promise.resolve("Test A Passed!"),
    Promise.reject("Test B Failed!"),
    Promise.resolve("Test C Passed!")
]).then(function(results){
    results.forEach(function (r, i){
        console.log("Test" + (i + 1) + ":" , r.status, "-", r.value || r.reason);
    })    
})
// Test1: fulfilled - Test A Passed!
// Test2: rejected - Test B Failed!
// Test3: fulfilled - Test C Passed!
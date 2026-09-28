let p = new Promise(function(resolve, reject) {
    resolve(42);
});
p.then(function(value) {
    console.log("Answer:", value);
}); //Answer: 42



//Interview Que:
let q = new Promise(function(resolve, reject) {
    reject("Something broke");
});
q.catch(function(err) {
    console.log("Caught:", err);
}); //Caught: Something broke



//Interview Que:
let r = Promise.resolve(5);
r.then(function(val) {
    return val * 10;
}).then(function(val) {
    console.log("Result:", val);
}); // Result: 50



//Interview Que:
Promise.resolve(1)
    .then(function (value) {
        console.log(value);
        return value + 1;
    })
    .then(function (value) {
        console.log(value);
        return value + 1;
    })
    .then(function (value) {
        console.log(value);
    })
    // 1
    // 2
    // 3



//Interview Que: 
// Was asked in BrowserStack
Promise.resolve("start")
    .then(function (val){
        console.log(val);
        throw new error("Broke at step 2");
    })
    .then(function (){
        console.log("This will not run");
    })
    .catch(function (err){
        console.log("Caught:", err.message);
    });
    // start
    // Caught: Broke at step 2



//Interview Que:
Promise.reject("Test failed")
    .then(function (data){
        console.log("Data:", data);
    })
    .catch(function (err){
        console.log("Error:", err);
    })
    .finally(function () {
        console.log("Cleanup done");
    })
    // Error: Test failed
    // Cleanup done



//Interview Que:
Promise.resolve("Quick  win").then(function (msg){
    console.log(msg);
});
Promise.reject("Quick  loss").catch(function (msg){
    console.log(msg);
});
// Quick  win
// Quick  loss



//Interview Que:
let t1 = Promise.resolve("Login: PASS");
let t2 = Promise.resolve("Search: PASS");
let t3 = Promise.resolve("Logout: PASS");
Promise.all([t1, t2, t3]).then(function (results){
    console.log(results);
}); // [ 'Login: PASS', 'Search: PASS', 'Logout: PASS' ]



//Interview Que:
// Promise.allSettled means does not matter if anyone is pass or fail, it will give all the details.
Promise.allSettled([
    Promise.resolve("API200"),
    Promise.reject("API500"),
    Promise.resolve("API201")
]).then(function (results){
    results.forEach(function (r){
        let val = r.status === "fulfilled" ? r.value : r.reason;
        console.log(r.status + " -> " + val);
        });
});
// fulfilled -> API200
// rejected -> API500
// fulfilled -> API201



//Interview Que:
let a1 = Promise.resolve("PASS");
let a2 = Promise.reject("FAIL");
let a3 = Promise.resolve("PASS");
// Promise.all means all should be passed. Othewise it will be failed. 
// Because in all, if anyone is failed then we will fait it.
Promise.all([a1, a2, a3])
    .then(function (r){ console.log("All:", r); })
    .catch(function (err){ console.log("Stopped:", err);
    }) //Stopped: FAIL


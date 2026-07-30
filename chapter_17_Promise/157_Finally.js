// let testRun = new Promise(function(resolve, reject) {
//     reject("Assertion Failed");
// });
// testRun.then(function(data) {
//     console.log(data);
// }).catch(function(error) {
//     console.log(error); // Assertion Failed
// }).finally (function() {
//     // This code will always executed anyhow
//     console.log("I will be executed anyhow!"); // I will be executed anyhow!
// })

// // Assertion Failed
// // I will be executed anyhow!


let testRun = new Promise(function(resolve, reject) {
    let apiCall = true;
    if(apiCall) {
        resolve({"status" : "done"});
    } else {
        reject("Assertion Failed");
    
    }
});
testRun.then(function(data) {
    console.log(data); // { status: 'done' }
}).catch(function(error) {
    console.log(error);
}).finally (function () {
    // This code will always executed anyhow
    console.log("I will be executed anyhow!"); //I will be executed anyhow!
})
// { status: 'done' }
// I will be executed anyhow!

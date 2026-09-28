// Open Browser
// Go to Login Page
// Enter Credentials
// Click Login

function openBrowser() {
    return new Promise  (function (resolve){
        // code to open the browser
        resolve("Open the Browser");
    })
}

function gotoLogin() {
    return new Promise  (function (resolve){
        resolve("Login Page Loaded");
    })
}

function enterCredentials() {
    return new Promise  (function (resolve){
        resolve("Credentials entered");
    })
}

function clickLogin() {
    return new Promise  (function (resolve){
        resolve("Logged in successfully");
    })
}

openBrowser().then(function (msg) {
    console.log("Step 1:", msg);
    return gotoLogin();
}).then(function (msg) {
     console.log("Step 2:", msg);
    return enterCredentials();
}).then(function (msg) {
    console.log("Step 3:", msg);
    return clickLogin();
}).then(function (msg) {
    return clickLogin();
    console.log("Step 4:", msg);
}).then(function (error) {
    console.log("Error:", error);
}).finally (function(){
    console.log("Done execution!");
});
// Step 1: Open the Browser
// Step 2: Login Page Loaded
// Step 3: Credentials entered
// Error: Logged in successfully
// Done execution!


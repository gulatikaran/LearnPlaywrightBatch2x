// How objects are used in  Automation?

let config = {};

config.browser = "chrome";
config.timeout = 3000;
config.testname = 'login test';

console.log(config); // { browser: 'chrome', timeout: 3000, testname: 'login test' }

if (config.browser === "chrome") {
    console.log("I will execute my TC");
}

// Suppose we want to delete any key:
delete config.browser;
console.log(config); // { timeout: 3000, testname: 'login test' }

if (config.browser === "chrome") {
    console.log("I will execute my TC");
}
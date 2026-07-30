// Using let
let config1 = { browser: "Chrome", timeout: 3000, retries: 3 };
// Modifying properties - ALLOWED
config1.browser = "Firefox";
config1.timeout = 5000;
config1.retries = 2;
console.log(config1); // { browser: 'Firefox', timeout: 5000, retries: 2 }

// Modifying object - ALLOWED
config1 = { browser: "Safari"};
console.log(config1); // { browser: 'safari' }


// print
console.log("---");


// Using const
const config = { browser: "Chrome", timeout: 3000, retries: 3 };
// Modifying properties - ALLOWED
config.browser = "Firefox";
config.timeout = 1000;
config.retries = 5;
console.log(config); // { browser: 'Firefox', timeout: 1000, retries: 5 }

// Modifying object - NOT ALLOWED
config = { browser: "Safari"};
console.log(config); // TypeError: Assignment to constant variable.
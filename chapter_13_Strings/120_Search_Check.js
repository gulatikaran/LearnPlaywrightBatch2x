// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";

// includes() - checks if a string contains a substring
console.log(url.includes("staging")); // true
console.log(url.includes("production")); // false

// startsWith() & endsWith() - checks if a string starts or ends with a substring
console.log(url.startsWith("https://")); // true
console.log(url.startsWith("http://")); // false

console.log(url.endsWith("true")); // true
console.log(url.endsWith("false")); // false

// indexOf() & lastIndexOf() - returns the index of the first or last occurrence of a substring
console.log(url.indexOf("a")); // 10
console.log(url.lastIndexOf("a")); // 24

console.log(url.indexOf("nothere")); // -1 (not found)

console.log(url.search(/login/)); // 28
console.log(url.search(/vwo/)); // 16
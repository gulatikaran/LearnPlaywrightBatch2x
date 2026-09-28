let str = "  Hello,  World!  ";
console.log(str); //   Hello,  World! 

console.log(str.toUpperCase()); //   HELLO,  WORLD!  

console.log(str.toLowerCase()); //   hello,  world!

console.log(str.trim()); // Hello,  World! (removes leading and trailing spaces)

console.log(str.trimStart()); // Hello,  World! (removes leading spaces)

console.log(str.trimEnd()); //   Hello,  World! (removes trailing spaces)

let msg = "Test: FAIL. Retry: FAIL.";
console.log(msg.replace("FAIL", "PASS")); // (replaces only first occurrence) // Test: PASS. Retry: FAIL.

console.log(msg.replaceAll("FAIL", "PASS")); // (replaces all occurrences) // Test: PASS. Retry: PASS.

console.log(msg.replace(/FAIL/g, "PASS")); // (replaces all occurrences using regex) // Test: PASS. Retry: PASS.


// Concatenation
let str2 = "Hello" + " " + "World!";
console.log(str2); // Hello World!

let str3 = "Hello".concat(" ", "World!");
console.log(str3); // Hello World!

let str4 = `Hello ${"World!"}`;
console.log(str4); // Hello World!

let url =  "https://app.vwo.com?app=pramod";
console.log(url.replace(/app/g, "qa")); // https://qa.vwo.com?qa=pramod

let r = "pass, fail, skip".split(",");
console.log(r); // ["pass", "fail", "skip"]

let rr = "test_login_pass".split("_").join(" ");
console.log(rr); // test login pass 

let parts = ["2024", "03", "07"];
let date = parts.join("-");
console.log(date); // 2024-03-07

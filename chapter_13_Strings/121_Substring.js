let str = "Login_Test_Pass_001";

// slice(start, end) - extracts a substring from a string based on start and end index. 
// Negative index supported 
console.log(str.slice(0, 5)); // Login becoz 0 to 4 (5-1)

console.log(str.slice(11)); // Pass_001

let testNumber = str.slice(-3);
console.log(testNumber); // 001

console.log(str.includes("Pass")); // true
console.log(str.includes("PASS")); // false (case-sensitive)
console.log(str.includes("pass")); // false (case-sensitive)


// Substring(start, end) - extracts a substring from a string based on start and end index
// Negative index NOT supported
console.log(str.substring(6, 10)); // Test

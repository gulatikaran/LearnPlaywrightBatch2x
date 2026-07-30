let x = 10;
if (x > 5)
    console.log("x is big");

// Question 1 — HTTP Status Code Categorizer
// Problem: Given an HTTP status code, print which category it belongs to.

// 200–299 → Success
// 300–399 → Redirection
// 400–499 → Client Error
// 500–599 → Server Error
// Anything else → Invalid

// Sample Input/Output:
// Input: 404
// Output: Client Error

// Input: 200
// Output: Success

let statusCode = 400;
if (statusCode >= 200 && statusCode <=299) {
    console.log("Success");
} else if (statusCode >= 300 && statusCode <=399) {
    console.log("Redirection");
} else if (statusCode >= 400 && statusCode <=499) {
    console.log("Client Error");
} else if (statusCode >= 500 && statusCode <=599) {
    console.log("Server Error");
} else {
    console.log("Invalid");
}

let statusCode1 = 200;
if (statusCode1 >= 200 && statusCode1 <=299) {
    console.log("Success");
} else if (statusCode1 >= 300 && statusCode1 <=399) {
    console.log("Redirection");
} else if (statusCode1 >= 400 && statusCode1 <=499) {
    console.log("Client Error");
} else if (statusCode1 >= 500 && statusCode1 <=599) {
    console.log("Server Error");
} else {
    console.log("Invalid");
}


// Question 2 — Test Case Pass/Fail Verdict
// Problem: Compare actual result with expected result and print test verdict.

// Sample Input/Output:
// expected = "Login Successful"
// actual   = "Login Successful"
// Output: ✅ Test Passed

// expected = "Login Successful"
// actual   = "Invalid Credentials"
// Output: ❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials

// https://emojipedia.org/check-mark-button

let expected = "Login Successful";
let actual = "Login Successful";
if (actual === expected) {
    console.log("✅ Test Passed");
} else {
    console.log("❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials");
}

let expected1 = "Login Successful";
let actual1 = "Invalid Credentials";
if (actual1 === expected1) {
    console.log("✅ Test Passed");
} else {
    console.log("❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials");
}

// Question 3 — Bug Severity Classifier
// Problem: Given a bug's impact score (1–10), classify the severity.

// 9–10 → Critical (block release)
// 7–8 → High
// 4–6 → Medium
// 1–3 → Low
// Anything else → Invalid score

// Sample Input/Output:
// Input: 9
// Output: Severity: Critical — Block release

// Input: 5
// Output: Severity: Medium

let score = 9;
if(score === 9 || score === 10) {
    console.log("Severity: Critical (block release)");
} else if (score === 7 || score === 8) {
    console.log("Severity: High");
} else if (score >= 4 && score <= 6) {
    console.log("Severity: Medium");
} else if (score >= 1 && score <= 3) {
    console.log("Severity: Low");
} else {
    console.log("Invalid score");
}

let score1 = 5;
if(score1 === 9 || score1 === 10) {
    console.log("Severity: Critical (block release)");
} else if (score1 === 7 || score1 === 8) {
    console.log("Severity: High");
} else if (score1 >= 4 && score1 <= 6) {
    console.log("Severity: Medium");
} else if (score1 >= 1 && score1 <= 3) {
    console.log("Severity: Low");
} else {
    console.log("Invalid score");
}


// Question 4 — Build Health Reporter
// Problem: Given the percentage of test cases passed in a CI build, report build health.

// 100% → Green Build
// 90–99% → Stable (investigate failures)
// 70–89% → Unstable
// Below 70% → Broken Build (block deployment)

// Sample Input/Output:
// Input: 95
// Output: 🟡 Stable — Investigate failures

// Input: 65
// Output: 🔴 Broken Build — Block deployment

let buildPercent = 95;
if (buildPercent === 100) {
    console.log("🟢 Green Build");
} else if (buildPercent >=90 && buildPercent <= 99) {
    console.log("🟡 Stable (investigate failures)");
} else if (buildPercent >=70 && buildPercent <= 89) {
    console.log("🔵 Unstable");
} else if (buildPercent < 70) {
    console.log("🔴 Broken Build (block deployment)");
}

let buildPercent1 = 65;
if (buildPercent1 === 100) {
    console.log("🟢 Green Build");
} else if (buildPercent1 >=90 && buildPercent1 <= 99) {
    console.log("🟡 Stable (investigate failures)");
} else if (buildPercent1 >=70 && buildPercent1 <= 89) {
    console.log("🔵 Unstable");
} else if (buildPercent1 < 70) {
    console.log("🔴 Broken Build (block deployment)");
}

// Question 5 — Login Lockout After Failed Attempts
// Problem: Track failed login attempts. Lock the account after 3 failed attempts.

// Sample Input/Output:
// Input: attempts = 2
// Output: 1 attempt left before lockout

// Input: attempts = 3
// Output: 🔒 Account Locked — Contact support

// Input: attempts = 0
// Output: Login successful

let attempts = 2;
if (attempts === 0) {
    console.log("Login successful");
} else if (attempts === 1) {
    console.log("2 attempts left before lockout");
} else if (attempts === 2) {
    console.log("1 attempt left before lockout");
} else if (attempts === 3) {
    console.log("🔒 Account Locked — Contact support");
}

let attempts1 = 3;
if (attempts1 === 0) {
    console.log("Login successful");
} else if (attempts1 === 1) {
    console.log("2 attempts left before lockout");
} else if (attempts1 === 2) {
    console.log("1 attempt left before lockout");
} else if (attempts1 === 3) {
    console.log("🔒 Account Locked — Contact support");
}

let attempts2 = 0;
if (attempts2 === 0) {
    console.log("Login successful");
} else if (attempts2 === 1) {
    console.log("2 attempts left before lockout");
} else if (attempts2 === 2) {
    console.log("1 attempt left before lockout");
} else if (attempts2 === 3) {
    console.log("🔒 Account Locked — Contact support");
}

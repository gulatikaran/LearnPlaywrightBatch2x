
let rajkumar_age = 18;
let rj_will_goa = (rajkumar_age >= 18) ? "Yes, RJ will go to Goa" : "No, RJ will not go to Goa";
console.log(rj_will_goa);

let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = (actualStatusCode === expectedStatusCode) ? "PASS" : "FAIL";
console.log(testResult);

let environment = "staging";
let baseURL = environment === "production" ? "https://api.example.com" : "https://staging-api.example.com";
console.log(baseURL);

let isCI = true;
let browserMode = isCI ? "headerless" : "headed";
console.log("Launching browser in:", browserMode, "mode");
//console.log("Launching browser in: " + browserMode + " mode");

let responseTime = 850;
let sla = 1000;
let slaStatus = responseTime <= sla ? "Within SLA" : "SLA Breached";
console.log(`Response time: ${responseTime} ms - ${slaStatus}`);
//console.log('Response time:', responseTime, 'ms -', slaStatus);

let condition = true;
let isMale = condition ? true : false;
console.log(isMale);



//Nested Ternary Operator

//let age_pramod = 45;
//let is_pramod_d = age_pramod > 18 ? "Go Goa" : "No Goa";
//console.log(is_pramod_d);

// If pramod age is greater than 18 then he can go to goa else he can't go to goa but if pramod age is greater than 26 
// then he can drink in goa else he can't drink in goa
//So Nested Ternary Operator use will be
let age_pramod = 45;
let is_pramod_d = age_pramod > 18 ? (age_pramod > 26 ? "Can Drink" : "Can't Drink") : "No Goa";
console.log(is_pramod_d);

///----------------------------
let statusCode = 404;
let category = 
    statusCode < 300 ? "Success" : 
        statusCode < 400 ? "Redirection" : 
            statusCode < 500 ? "Client Error" : "Server Error";
console.log(`Status ${statusCode}: ${category}`);

//Task No.1
// Maximum number between two numbers, okay, by using the ternary operator
let a = 10;
let b = 5;
let max_num = (a > b) ? a : b;
console.log("Maximum number is:", max_num); //10

//Task No.2
// And maximum between the three numbers also by using ternary operator 
let x = 15;
let y = 20;
let z = 10;
let maximum_num = (x > y && y > z) ? x :
    (x < y && y > z) ? y : z;
console.log("Maximum number is:", maximum_num); //20
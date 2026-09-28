// Objects
// Key and Value

let student1 = {name: "Amit", age: 65};
let student2 = {name: "Pramod"};
let student3 = {name: "Pramod", age: 87, phone: 9876543210};

// Key will not be in double quotes
// Below key in double quotes is actually JSON

let JSON_student4 = {"name": "Pramod", "age": 87, "phone": 9876543210};

let a = {status : "pass"};
// console.log(a); // { status: 'pass' }
// console.log(a.status); // pass
// console.log(a["status"]); // pass

let a1 = {status : "pass"};
console.log(a1.status); // pass

// let b = a;
// console.log(b.status); // pass

let b = a;
b.status = "fail";
console.log(a.status);
console.log(b.status); // fail

if (b === a) {
    console.log("true"); // true
} else {
    console.log("false"); //
}
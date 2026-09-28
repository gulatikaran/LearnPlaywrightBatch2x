let c = {status : "pass"};
let d = {status : "pass"};

console.log(c); // { status: 'pass' }
console.log(d); // { status: 'pass' }

if (c === d) {
    console.log("true");
} else {
    console.log("false"); // false
}
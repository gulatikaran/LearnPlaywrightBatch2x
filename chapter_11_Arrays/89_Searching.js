let results = ["pass", "fail", "pass", "error", "fail"];
// Index = [0, 1, 2, 3, 4]

// indexof - returns first index, or -1 if not found
let a = results.indexOf("pass");
console.log(a); // 0

let b = results.indexOf("fail");
console.log(b); // 1

let c = results.indexOf("error");
console.log(c); // 3

let d = results.indexOf("skip");
console.log(d); // -1

// lastindexof - searches from the end
let e = results.lastIndexOf("pass");
console.log(e); // 2

let f = results.lastIndexOf("fail");
console.log(f); // 4

let h = results.lastIndexOf("error");
console.log(h); // 3

let i = results.lastIndexOf("fine");
console.log(i); // -1

// includes - returns true or false
let j = results.includes("error");
console.log(j); // true

let k = results.includes("skip");
console.log(k); // false


let nums = [10, 25, 30, 45];
// Index = [0, 1, 2, 3]

// find - returns value of first matching element
let l = nums.find(x => x > 20);
console.log(l); // 25

// findIndex - returns index of first matching element
let m = nums.findIndex(x => x > 20);
console.log(m); // 1

// findLast - returns value of last matching element
let n = nums.findLast(x => x > 20); 
console.log(n); // 45

// findLastIndex - returns index of last  matching element
let o = nums.findLastIndex(x => x > 20); 
console.log(o); // 3
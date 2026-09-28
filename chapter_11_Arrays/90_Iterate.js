// Iterate - Go from one to another
// 1st way: Using normal for loop
let tests = ["login", "checkout" , "search"];

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}
// login
// checkout
// search

console.log("---");

// 2nd way: Using for...of(cleanest for values)
for (test of tests) {
    console.log(test);
}
// login
// checkout
// search

console.log("---");

// 3rd way: Using forEach (test with index)
tests.forEach((test, index) => {
    console.log(test, index);
});

// login 0
// checkout 1
// search 2

console.log("---");

// 4th way: Using for loop with in
let students = ["Aman", "Chetan", "Sunil", "Zimmy"];

for (let b in students) {
    console.log(b, "->", students[b]);
}
// 0 -> Aman
// 1 -> Chetan
// 2 -> Sunil
// 3 -> Zimmy

console.log("---");

// 5th way:v vv
for (let [i, test] of tests.entries()) {
    console.log(i, test);
}
// 0 login
// 1 checkout
// 2 search


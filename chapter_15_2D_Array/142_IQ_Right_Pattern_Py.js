// n = 3
// *
// * *
// * * *
let n = 3;
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}

console.log("------");

let n1 = 3;
for (let a = 0; a < n1; a++) {
    let row1 = "";
    for (let b = 0; b <= a; b++) {
        row1 += "* ";
    }
    console.log(row1);
}
let x = "global";

if (true) {
    // TDZ for block-scoped "x" starts here
    //console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x = "block";
    console.log(x);
}

console.log(x);
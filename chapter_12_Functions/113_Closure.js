function outer() {
    let message = "hello";
    console.log("Outer CALLED!");
    function inner() {
        console.log(message);
    }
    return inner;
}

let fn_inner = outer();
fn_inner(); // Outer CALLED!
            // hello

inner(); // ReferenceError: inner is not defined
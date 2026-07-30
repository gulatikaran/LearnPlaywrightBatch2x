// Function within function - Not used in Automation

// Nested scope / blocked scope
function outer() {
    let x = 10;
    function inner() {
        let y = 20;
        console.log(x);
    }
    inner();
    console.log(y); // can't access inner function variable
}

outer();
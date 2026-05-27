var a = 10; // Global SCOPE


// var is function-scoped, 
// meaning it is accessible throughout the entire function in which it is declared, 
// regardless of block boundaries. This can lead to unintended consequences, 
// such as variable hoisting and scope leakage.

console.log(a); 

function printHello() {
    console.log("Hello TheTestingAcdemy!");
    var a = 20; // Local SCOPE
    console.log(a);

    if (true) {
        var a = 30;
        console.log(a);
    }
}

printHello();

var a = 50;
console.log(a);


// var == trump, flipper, dual faced, no trust worthy
var a = 10; // Global SCOPE
console.log(a);

//Definition of function
function printHello() {
    console.log("Hello TheTestingAcademy!");
    let a = 20; // Local SCOPE
    console.log(a);
    if (true) {
        let a =30;
        console.log(a);
    }
    console.log("F->", a);
}

console.log("G->", a);

printHello();

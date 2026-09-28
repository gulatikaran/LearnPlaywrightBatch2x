function sayHello(msg: string): void {
    console.log(msg);
}

// Function annotations
function greet(name: string): string {
    return `Hello, ${name}`; // This is Template literal
}

// never- function never returns (throws or infinite loop)
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) { }
}

// /never- never returns anything
// void- returns empty
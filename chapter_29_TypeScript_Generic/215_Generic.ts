function getString(name: string): string {
    return "Amit";
}

getString("Pramod");
// getString(123);

function getFirstResult<T>(results: T[]) {
    return results[0]!;
}

let firstCode = getFirstResult<number>([200, 400, 500]);

let firstTest = getFirstResult<string>(["Login", "Signup", "Cart"]);

console.log("First Code:", firstCode);

console.log("First test:", firstTest);

// Output is
// First Code: 200
// First test: Login
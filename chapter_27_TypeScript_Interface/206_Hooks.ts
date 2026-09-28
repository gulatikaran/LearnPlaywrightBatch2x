interface TestHook {
    (TestName: string): void; // This is Ananonymous function without a name
}

let beforeEachHook: TestHook = function (testName: string): void {
    console.log("Before setting up: " + testName);
}

let afterEachHook: TestHook = function (testName: string): void {
    console.log("After tearing down: " + testName);
}

beforeEachHook("Login Test");

interface TestCase {
    id: number;
    name: string;
    status: string;
    duration: number;
}

let test1: TestCase = {
    id: 1,
    name: "Login with valid crednetials",
    status: "PASS",
    duration: 1500
};

console.log("TC_" + test1.id + ": " + test1.name + "-> " + test1.status);

afterEachHook("Login Test");

// Output:
// Before setting up: Login Test
// TC_1: Login with valid crednetials-> PASS
// After tearing down: Login Test


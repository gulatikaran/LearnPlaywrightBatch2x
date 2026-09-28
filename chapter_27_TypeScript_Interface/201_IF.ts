// Interface gives structure to your objects.

interface TestCase {
    id: number;
    name: string;
    status: string;
    duration: number;
} // These are rules


let test1: TestCase = {
    id: 1,
    name: "Login with valid credentials",
    status: "PASS",
    duration: 1500
}
console.log("TC-" + test1.id + ": " + test1.name + " -> " + test1.status);
// TC-1: Login with valid credentials -> PASS
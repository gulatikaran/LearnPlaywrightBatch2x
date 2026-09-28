class TestCase {
    constructor(name, status, priority) {
        this.name = name;
        this.status = status;
        this.priority = priority;
    }
    display() { // Method - Inside the class
        console.log(this.name + " -> " + this.status + " -> " + this.priority);
    }
}

// Function - Outside the class
function f1 () {
}

let loginTC = new TestCase("Login Test Case", "Pass", "P0");
let signupTC = new TestCase("Signup Test Case", "Fail", "P1");
loginTC.display(); // Login Test Case -> Pass -> P0
signupTC.display(); // Signup Test Case -> Fail -> P1
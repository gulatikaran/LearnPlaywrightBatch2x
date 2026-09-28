// Exercise 4: Method chainign with 'this'

class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
        return this; // Return the current object for method chaining
    }

    display() {
        console.log("Count: " + this.count);
        return this; // Return the current object for method chaining
    }
}

new Counter().increment().increment().increment().display(); // Count: 3
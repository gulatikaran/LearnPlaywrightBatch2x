// We can also mix class and interface.

interface Executable {
    name: string;
    run(): void;
    getStatus: string;
}

class TestCase implements Executable {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    run(): void { // function
        console.log("[RUN]" + this.name);
    }
    getStatus(): string { // function
        return "PASS";
    }
}

// When we create an object of a class, we use new keyword.
let tc: Executable = new TestCase("Verify login redirect");
tc.run();

// [RUN]Verify login redirect
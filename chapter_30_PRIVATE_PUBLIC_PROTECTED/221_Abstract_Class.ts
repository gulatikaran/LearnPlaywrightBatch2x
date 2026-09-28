// This concept we will never use in Automation.

abstract class BaseTest {
    protected testName: string;
    constructor(testName: string) {
        this.testName = testName;
    }

    abstract setup(): void;
    abstract execute(): void;
    abstract teardown(): void;
    abstract loan(): void;
}

class UITest extends BaseTest {
    setup(): void {
        console.log(" Setup: launch browser");
    }

    execute(): void {
        console.log(" Execute click buttons, file forms");
    }

    teardown(): void {
        console.log(" Teardown: close browser");
    }

    loan(): void {
        console.log(" GIVE LOAN");
    }
}


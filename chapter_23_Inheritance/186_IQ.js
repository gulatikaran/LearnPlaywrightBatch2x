class BaseTest {
    setup() {
        console.log("Base: open browser");
    }

    teardown() {
        console.log("Base: close browser");
    }
}

class UITest extends BaseTest {
    setup() {
        super.setup(); // UITest will help you to call yor parent function.
        console.log("UI: maximize window");
    }

    teardown() {
        console.log("UI: take screenshot");
        super.teardown(); // UITest will help you to call yor parent function.
    }
}

let test = new UITest();
test.setup();

// O/P:
// Base: open browser
// UI: maximize window
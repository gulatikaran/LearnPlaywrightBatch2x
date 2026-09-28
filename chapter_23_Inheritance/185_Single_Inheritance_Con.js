class BaseTest {
    setup() {
        console.log("BaseTest: open browser");
    }
}

class APITest extends BaseTest {
    setup() {
        console.log("APITest: open browser");
    }
}

let test = new APITest(); //Whoever object is present, it will call that.
test.setup();

// Output = APITest: open browser
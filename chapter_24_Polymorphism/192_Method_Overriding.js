class BaseTest{
    setup() {
        console.log("BaseTest: open browser");
    }
}

class APITest extends BaseTest{
    setup() {
        console.log("APITest: open browser");
    }
}

let test = new APITest(); //Whoever object is present, it will call that.
test.setup();

// Output = APITest: open browser

console.log("------------------");

class BaseTest2{
    setup2() {
        console.log("BaseTest2: open browser");
    }
}

class APITest2 extends BaseTest2{
    // setup2() is not overridden here, so it will use the method from BaseTest2
}

let test2 = new APITest2(); //Whoever object is present, it will call that.
test2.setup2();

// Output = BaseTest2: open browser
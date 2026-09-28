class TestCase {
    execute() {
        console.log("1");
    }
}

class UnitTest extends TestCase {
    execute() {
        console.log("2");
    }
}

class APITest extends TestCase {
    execute() {
        console.log("3");
    }
}

class E2ETest extends TestCase {
    execute() {
        console.log("4");
    }
}

let tests = [new UnitTest(), new APITest(), new E2ETest()];
tests.forEach(function (test) {
    test.execute();
});

// Output:
// 2
// 3
// 4
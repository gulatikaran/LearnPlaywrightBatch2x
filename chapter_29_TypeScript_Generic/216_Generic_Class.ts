// How to create a generic class?

class TestDataStorage<T> {
    private items: T[] = [];
    add(item: T): void {
        this.items.push(item);
    }

    getFirst(): T {
        return this.items[0]!;
    }

    getAll(): T[] {
        return this.items;
    }

    count(): number {
        return this.items.length;
    }
}

let statuscodeStore = new TestDataStorage<number>();
let testNameStore = new TestDataStorage<string>();

statuscodeStore.add(200);
statuscodeStore.add(404);
statuscodeStore.add(500);

testNameStore.add("Login Test");
testNameStore.add("Checkout Test");

console.log("Codes:", statuscodeStore.getAll());
console.log("First Code:", statuscodeStore.getFirst());

console.log("Test:", testNameStore.getAll());
console.log("Test Count:", testNameStore.count());

// Output is:
// Codes: [ 200, 404, 500 ]
// First Code: 200
// Test: [ 'Login Test', 'Checkout Test' ]
// Test Count: 2

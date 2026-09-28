class Car {
    // CAB
    // constructor
    constructor(name_given_during_obj_creation) {
        this.name = name_given_during_obj_creation;
    }

    // Attribute

    // Behaviour
    drive() {
        console.log("I am driving", this.name);
    }
}

const tesla = new Car("Model S"); // Object creation
tesla.drive();

const i10 = new Car("Grand i10"); // Object creation
i10.drive();

// Output: I am driving Model S
// Output: I am driving Grand i10
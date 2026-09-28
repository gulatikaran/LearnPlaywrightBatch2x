class Person {
    constructor() {
        console.log("I will be called automatically when an object is created!");
    }

    // Attributes
    name;
    email;
    salary;
    address;

    // Behaviour
    sleep() {}
    eat() {}
    walk() {}
}

const obj_ref = new Person(); // Object creation
// obj_ref = Is called the object reference (address of the object in memory)
// new Person() = Is called the object creation (constructor will be called automatically)
//console.log(obj_ref); 

// Output: I will be called automatically when an object is created!
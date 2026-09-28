class Student {
    // Non-static variables will be different for each object created from the class. 
    // Static variables will be same for all the objects created from the class.
    constructor(name_student, age, phoneNo) { 
        this.name_student = name_student; // Non-static variables
        this.age = age; // Non-static variables
        this.phoneNo = phoneNo; // Non-static variables
    }

    static batch_name = "Playwright2x"; // Static variables
    static mentor_name = "Pramod Dutta"; // Static variables
    static display() { // Static method
        console.log("Hi, I am a common function");
    }
}

const s1 = new Student("Yasho", 32, "1234567890");
const s2 = new Student("Sharad", 32, "8210910909");

console.log(s1.name_student); // Yasho
console.log(s2.name_student); // Sharad

console.log(Student.batch_name); // Playwright2x
console.log(Student.mentor_name); // Pramod Dutta
console.log(s1.batch_name); // undefined
Student.display(); // Hi, I am a common function
class Person {
    // Hide your children
    #child1;
    #child2;

    constructor(name, ch1, ch2) {
        this.name = name;
        this.#child1 = ch1;
        this.#child2 = ch2;
    }

    getChild1() {
        return this.#child1;   
    }

    setChild1(changed_name) {
        this.#child1 = changed_name;
    }
}

let p = new Person("Pramod", "Vrat", "Jenny");
console.log(p.name); // Pramod
//console.log(p.#child1); // SyntaxError: Private field '#child1' must be declared in an enclosing class
console.log(p.getChild1()); // Vrat
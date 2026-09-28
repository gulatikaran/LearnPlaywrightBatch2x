class ICICI {
    #balance; // # means private in JS. In TS- private.

    constructor(name, balance) {
        this.#balance = balance;
        this.name = name;
    }

    getBalance() {
        return this.#balance;
    }

    setBalance(balance, isCashier) {
        if (isCashier) {
            this.#balance = balance;
        } else {
            console.log("Not allowed");
        }
    }
}

let pramod = new ICICI("Prrammod", 10000);
console.log(pramod.getBalance()); // 10000
pramod.setBalance(1000000, false); // Not allowed
console.log(pramod.getBalance());

let pramod_father = new ICICI("Prrammod", 2000);
console.log(pramod_father.getBalance()); // 2000
pramod_father.setBalance(3000000, true);
console.log(pramod_father.getBalance()); // 3000000
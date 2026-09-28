class BankAccount {
    #balance = 0;

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    getBalance() {
        return this.#balance; // Controlled access
    }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance()); // Output: 100
//console.log(account.balance) // undefined (no public field by that name)
//console.log(account.#balance); // Error: Private field '#balance' must be declared in an enclosing class

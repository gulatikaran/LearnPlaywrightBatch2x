// Exercise 2: Constructor with Default values

class Environment {
    constructor (name = "staging", port = 3000) {
        this.name = name;
        this.port = port;
    }

    get URL() {
        return "https://" + this.name + ":" + this.port;
    }
}

let env1 = new Environment();
let env2 = new Environment("production", 8080);

console.log(env1.URL); // https://staging:3000
console.log(env2.URL); // https://production:8080
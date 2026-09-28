// Private variables are created using hash (#) symbol before the variable name.
// Private variables can only be accessed within the class they are defined in.

class Credentials {
    #apiKey; // Private variables are not allowed to be accessed/used outside the class
    user; // Public variable can be accessed outside the class
    constructor(user, apiKey) {
        this.user = user;
        this.#apiKey = apiKey;        
    }

    // Custom made function by us
    pramodgetAuthHeader() {
        return "Bearer " + this.#apiKey;
    }
}

let cred = new Credentials("admin", "secret_key_1234");
console.log(cred.user); // admin
console.log(cred.pramodgetAuthHeader()); // Bearer secret_key_1234
//console.log(cred.apiKey); // undefined
//console.log(cred.#apiKey); // Error: Private field '#apiKey' must be declared in an enclosing class

const token = cred.pramodgetAuthHeader();
console.log(token); // Bearer secret_key_123


const user = {name1: "John", age : 30, city : "NYC"};

// Basic destructuring
const {name1, age} = user;
console.log(name1); // John
console.log(age); // 30

// Rename variables / keys
const {name1 : userName, age : userAge} = user;
console.log(userName); // John
console.log(userAge); // 30

// Default values
const {country = "USA"} = user;
console.log(country); // USA
console.log(user); // { name1: 'John', age: 30, city: 'NYC' } // This will not include country

// Object within object within object
const data = {
    user : {
        name : "John",
        address : {
            city : "NYC"
        }    
    }
};
const { user: { address: { city } } } = data;
console.log(data.user.address.city); // NYC
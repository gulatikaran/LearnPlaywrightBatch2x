const obj = {a: 1, b: 2, c: 3};
console.log(Object.keys(obj)); // [ 'a', 'b', 'c' ]
console.log(Object.values(obj)); // [ 1, 2, 3 ])

// How to iterate: Using for loop
const user = { name: "John", age: 30};

for (const key in user) {
    console.log('${key} : ${user[key]}');
}
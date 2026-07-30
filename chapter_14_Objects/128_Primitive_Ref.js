// Primitive vs Reference Types
let a = 10;
let b = a;
b = 99;
console.log(a); // 10
console.log(b); // 99

// Objects - Copied by REFERENCE, call by ref.
// Reference - object, array, function
let obj1 = {val : 10};
let obj2 = obj1;
obj2.val = 99;
console.log(obj1.val); // 99
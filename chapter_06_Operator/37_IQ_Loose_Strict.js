console.log(0 == ""); // Output: true (loose equality, checks value only). Here value is same but type is different
console.log(0 == "0"); // Output: true (loose equality, checks value only). Here value is same but type is different
console.log("" == "0"); // Output: false (loose equality, checks value only). Here value is different but type is same

console.log("" == 0); // Output: true (loose equality, checks value only). Here value is same but type is different
console.log("0" == 0); // Output: true (loose equality, checks value only). Here value is same but type is different
console.log("0" == ""); // Output: false (loose equality, checks value only). Here value is different but type is same

console.log(0 == false); // Output: true (loose equality, checks value only). Here value is same but type is different
console.log(0 == true); // Output: false (loose equality, checks value only). Here value is different but type is different
console.log(null == 0); // Output: false (loose equality, checks value only). Here value is different but type is different
console.log(null == undefined); // Output: true (loose equality, checks value only). Here value is different but type is same
console.log(null === undefined); // Output: false (strict equality, checks value and type). Here value is different and type is also different

/*explain why console.log(null == undefined) is true where as (null === undefined) is false?

null == undefined → true
The == (abstract equality) operator has a special rule defined in the ECMAScript spec: null and undefined are considered 
equal to each other and to nothing else. No type coercion is performed — it's simply a hardcoded rule in the spec.

null === undefined → false
The === (strict equality) operator first checks if the operands are of the same type. They are not:
- typeof null → "object"
- typeof undefined → "undefined"
Different types → immediately returns false.
Summary: == treats null and undefined as interchangeable (they both represent "no value"). === requires
both type and value to match, and their types differ.*/




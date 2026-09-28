console.log(0 == ""); // Output: true (== coerces "" to 0)
console.log(0 === ""); // Output: false (=== checks type: number vs string)

console.log(0 == false); // Output: true (== coerces false to 0)
console.log(0 === false); // Output: false (=== checks type: number vs boolean)

console.log("" == false); // Output: true (== coerces both to 0)
console.log("" === false); // Output: false (=== checks type: string vs boolean)

console.log("0" == false); // Output: true (== coerces both to 0)
console.log("0" === false); // Output: false (=== checks type: string vs boolean)

console.log(null == undefined); // Output: true (special rule in spec)
console.log(null === undefined); // Output: false (different types: object vs undefined)

console.log(null == 0); // Output: false (null is not coerced to 0)
console.log(null === 0); // Output: false (different types)

console.log(undefined == 0); // Output: false (undefined is not coerced to 0)
console.log(undefined === 0); // Output: false (different types)

console.log(undefined == false); // Output: false (undefined only equals null with ==)
console.log(undefined === false); // Output: false (different types)

console.log(null == null); // Output: true
console.log(null === null); // Output: true

console.log(undefined == undefined); // Output: true
console.log(undefined === undefined); // Output: true

console.log(NaN == NaN); // Output: false (NaN is not equal to anything, even itself)
console.log(NaN === NaN); // Output: false (same behavior with ===)

console.log(" \t\r\n" == 0); // Output: true (whitespace string coerced to 0)
console.log(" \t\r\n" === 0); // Output: false (different types)

console.log([] == false); // Output: true ([] coerced to "" then to 0)
console.log([] === false); // Output: false (different types)

console.log([0] == false); // Output: true ([0] coerced to "0" then to 0)
console.log([0] === false); // Output: false (different types)

console.log([] == []); // Output: false (different object references)
console.log([] === []); // Output: false (different object references)

console.log("1" == 1); // Output: true (== coerces string to number)
console.log("1" === 1); // Output: false (different types: string vs number)

console.log(true == 1); // Output: true (== coerces true to 1)
console.log(true === 1); // Output: false (different types: boolean vs number)

console.log(true == "1"); // Output: true (== coerces both to 1)
console.log(true === "1"); // Output: false (different types: boolean vs string)

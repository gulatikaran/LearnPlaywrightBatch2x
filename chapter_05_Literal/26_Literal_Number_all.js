// 1. Decimal Literals (Base 10)
let decimal = 42;
let negative = -100;
let zero = 0;

// 2. Hexadecimal Literals (Base 16) - prefix 0x or 0X
let hex1 = 0xFF;
let hex2 = 0X2A;
let color_hex = 0xFF0000;

// 3. Octal Literals (Base 8) - prefix 0o or 0O
let octal1 = 0o52;
let octal2 = 0O77;

// 4. Binary Literals (Base 2) - prefix 0b or 0B
let binary1 = 0b101010;
let binary2 = 0B11111111;

// 5. Floating-Point Literals
let pi = 3.14;
let smallNumber = 0.001;
let dotless = .5;

// 6. Exponential Notation
let exponential1 = 1e6;
let exponential2 = 2.5e-3;
let exponential3 = 1E10;

// 7. BigInt Literals - suffix n
let big1 = 123n;
let big2 = 0xFFn;
let big3 = 0b1010n;
let big4 = 0o77n;

// 8. Special Numeric Values
let inf = Infinity;
let negInf = -Infinity;
let notANumber = NaN;

console.log("=== Decimal ===");
console.log(decimal, typeof decimal);
console.log(negative, typeof negative);
console.log(zero, typeof zero);

console.log("=== Hexadecimal (Base 16) ===");
console.log(hex1, typeof hex1);
console.log(hex2, typeof hex2);
console.log(color_hex, typeof color_hex);

console.log("=== Octal (Base 8) ===");
console.log(octal1, typeof octal1);
console.log(octal2, typeof octal2);

console.log("=== Binary (Base 2) ===");
console.log(binary1, typeof binary1);
console.log(binary2, typeof binary2);

console.log("=== Floating-Point ===");
console.log(pi, typeof pi);
console.log(smallNumber, typeof smallNumber);
console.log(dotless, typeof dotless);

console.log("=== Exponential Notation ===");
console.log(exponential1, typeof exponential1);
console.log(exponential2, typeof exponential2);
console.log(exponential3, typeof exponential3);

console.log("=== BigInt ===");
console.log(big1, typeof big1);
console.log(big2, typeof big2);
console.log(big3, typeof big3);
console.log(big4, typeof big4);

console.log("=== Special Numeric Values ===");
console.log(inf, typeof inf);
console.log(negInf, typeof negInf);
console.log(notANumber, typeof notANumber);

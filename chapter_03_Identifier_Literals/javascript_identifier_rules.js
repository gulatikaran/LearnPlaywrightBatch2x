// JavaScript Identifier Rules - Examples

// ✅ VALID IDENTIFIERS

// 1. Starting with a letter
let firstName = "John";
let age = 25;

// 2. Starting with underscore
let _privateVar = "hidden";
let __internal = "value";

// 3. Starting with dollar sign
let $element = document.getElementById("id");
let $$$ = "valid identifier";

// 4. Containing letters, digits, underscores, dollar signs
let userName1 = "Alice";
let user_name_2 = "Bob";
let user$Name$3 = "Charlie";
let _var123$ = "mixed";

// 5. Case-sensitive (different identifiers)
let myVar = "uppercase V";
let myvar = "lowercase v";
let MYVAR = "all uppercase";

// ❌ INVALID IDENTIFIERS (uncomment to see errors)

// 6. Cannot start with a number
// let 1stPlace = "gold"; // SyntaxError

// 7. Cannot contain spaces
// let first name = "John"; // SyntaxError

// 8. Cannot contain special characters
// let user-name = "John"; // SyntaxError (hyphen)
// let user@name = "John"; // SyntaxError (@)
// let user#name = "John"; // SyntaxError (#)

// 9. Cannot use reserved keywords
// let if = "condition"; // SyntaxError
// let for = "loop"; // SyntaxError
// let while = "loop"; // SyntaxError
// let class = "type"; // SyntaxError
// let return = "value"; // SyntaxError
// let function = "fn"; // SyntaxError
// let var = "variable"; // SyntaxError
// let let = "variable"; // SyntaxError
// let const = "constant"; // SyntaxError

// 10. Cannot use true, false, null
// let true = "boolean"; // SyntaxError
// let false = "boolean"; // SyntaxError
// let null = "empty"; // SyntaxError

// ✅ Reserved keywords that are valid in some contexts (but avoid)
// let undefined = "value"; // Works but not recommended
// let Infinity = "value"; // Works but not recommended

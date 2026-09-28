console.log(greeting);
//var greeting = "Hello"; 

//Output: undefined

// Explanation: In JavaScript, variable declarations using 'var' are hoisted to the 
// top of their scope. However, only the declaration is hoisted, not the initialization. 
// Therefore, when we try to access 'greeting' before it is assigned a value, it returns
//  'undefined' instead of throwing an error.

//behind the scenes, JavaScript engine interprets the code as follows:

//var greeting; <-- hoisted with undefined
//console.log(greeting); // Output: undefined
//greeting = "Hello"; // <-- assignment stays in place, only declaration is hoisted
//console.log(greeting); <-- Output: Hello


// var a;
console.log(a);
var a = "Pramod";
console.log(a);
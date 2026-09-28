// Creating Arrays// Array Literal (preferred)
let browsers = ["Chrome", "Firefox", "Safari"];

// Array constructor

let scores = new Array(3); // here 3 is the length
let scores2 = new Array(1, 2, 3);
console.log(scores); // [ <3000 empty items> ]
console.log(scores2); // [ 1, 2, 3 ]

let scores3 = new Array(3);
scores3[0] = 1;
scores3[1] = 1;
scores3[2] = 1;
console.log(scores3); // [ 1, 1, 1 ]

let numbers = new Array(100, 200, 300, 400); //0-3: 4
console.log(numbers); // [ 100, 200, 300, 400 ]

let test = Array.of(10, 20, 30, 40, 50);
console.log(test); // [ 10, 20, 30, 40, 50 ]


// Array.from()
let chars = Array.from("hello");
console.log(chars); // [ 'h', 'e', 'l', 'l', 'o' ]

let numbers1 = Array.from("1234567");// [ '1', '2', '3', '4' ]
console.log(numbers1);

let numbers2 = Array.from("123456789");
console.log(numbers2);


// Sorting
let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits); // [ 'apple', 'banana', 'cherry' ]

let numbers = [3, 1, 4];
numbers.sort();
console.log(numbers); // [ 1, 3, 4 ]

let nums = [10, 1, 21, 2];
nums.sort();
console.log(nums); // [ 1, 10, 2, 21 ]
// Natural Sorting, Lexicographic Sorting

nums.sort((a, b) => a - b); // Ascending Sorting
console.log(nums); // [ 1, 2, 10, 21 ]

nums.sort((a, b) => b - a); // Descending Sorting
console.log(nums); // [ 21, 10, 2, 1 ]

// // slice (start, end) - returns new array, does not mutate actual -> (start, end - 1) -> Becoz index starts from 0
// let arr = [1, 2, 3, 4, 5]
//    Index = 0, 1, 2, 3, 4
// console.log(arr.slice(1, 3)); // (startIndex, endIndex - 1) i.e. (1, 2). So, o/p is [ 2, 3 ]

// console.log(arr.slice(2, 4)); // (startIndex, endIndex - 1) i.e. (2, 3). So, o/p is [3, 4]

// console.log(arr.slice(2, 5)); // (startIndex, endIndex - 1) i.e. (2, 4). So, o/p is [ 3, 4, 5 ]

// console.log(arr.slice(2)); // here no endIndex so, we it will slice everthing from startIndex 2. So, o/p is [ 3, 4, 5 ]

// console.log(arr.slice(-2)); // here - (minus) will consider index as [-5, -4, -3, -2, -1]. 0 will not be considered.
// // So, o/p is [ 4, 5 ]

// console.log(arr.slice(0)); // here no endIndex so, we it will slice everthing from startIndex 0. 
// // So, o/p is [ 1, 2, 3, 4, 5 ]WW

// Slice - Non-Destructive
// let arr = [10, 20, 30, 40, 50];
// let s = arr.slice(1, 4); // [20, 30, 40]
// console.log(arr); // [ 10, 20, 30, 40, 50 ] Here main array did not get changed.
// console.log(s); // [ 20, 30, 40 ]


// Splice - Destructive
let arr = [10, 20, 30, 40, 50];
let removed = arr.splice(1, 2); // [20, 30, 40]
console.log(removed); // [ 20, 30 ]
console.log(arr); // [ 10, 40, 50 ] Here main array get changed.
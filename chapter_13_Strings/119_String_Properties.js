console.log(typeof("200")); // string

let str = "Hello, World!";
/*
Char	        H	e	l	l	o	,		W	o	r	l	d	!
Forward Index	0	1	2	3	4	5	6	7	8	9	10	11	12
Reverse Index	-13	-12	-11	-10	-9	-8	-7	-6	-5	-4	-3	-2	-1
Length	        1	2	3	4	5	6	7	8	9	10	11	12	13
*/

console.log(str.length); // 13

// Access by index
console.log(str[0]); // H
console.log(str[6]); // 
console.log(str[7]); // W

console.log(str.at(-1)); // !
console.log(str.at(-6)); // W

// index = 0, length = 1
console.log(str.charAt(0)); // H
console.log(str.charCodeAt(0)); // 72 (ASCII code of H)
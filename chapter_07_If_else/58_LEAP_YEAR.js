// Leap Year Check

//Rules:
// Divisible by 4 and not divisible by 100 -> Leap year
//OR
// Divisible by 400 -> Leap year
// ELSE Not a Leap year

// i.e. (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)

let year = 2008;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Leap year");
} else {
    console.log("Not a Leap year");
}
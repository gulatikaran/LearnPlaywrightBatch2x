let marks = 85;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80 && marks <=89) {
    console.log("Grade: B");
} else if (marks >= 70 && marks <=79) {
    console.log("Grade: C");
} else if (marks >= 60 && marks <=69) {
    console.log("Grade: D");
} else if (marks < 60) {
    console.log("Grade: Fail");
}

//OR

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks > 79 && marks < 90) {
    console.log("Grade: B");
} else if (marks > 69 && marks < 80) {
    console.log("Grade: C");
} else if (marks > 59 && marks < 70) {
    console.log("Grade: D");
} else {
    console.log("Grade: Fail");
}
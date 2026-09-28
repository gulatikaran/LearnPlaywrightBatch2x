let username = "Dev";
let password = "secure123";
let isAccountLocked = true;

// if (username === "Dev" && password === "secure123") { // Allowed to enter
//     console.log("Allowed to enter");
// } else {
//     console.log("Not allowed to enter");
// } 


// if ((username === "Dev" && password === "secure123") && !isAccountLocked) { // Not allowed to enter
//     console.log("Allowed to enter");
// } else {
//     console.log("Not allowed to enter");
// }


if ((username === "Dev" && password === "secure123") && isAccountLocked) { // Allowed to enter
    console.log("Allowed to enter");
} else {
    console.log("Not allowed to enter");
}
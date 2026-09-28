let isLoggedIn = true;
let userRole = "viewer"; // Values are case senstive

if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("Welcome Admin! All access granted.");
    } 
    else if (userRole === "editor") {
        console.log("Welcome Editor! Edit access granted.");
    } 
    else if (userRole === "viewer") {
        console.log("Welcome Viewer! Read only access granted.");
    }
    else {
        console.log("Welcome guest! No access granted.");
}
} else {
    console.log("You are not logged in!");
}


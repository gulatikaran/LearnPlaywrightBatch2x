interface BasePage {
    url: string;
    title: string;
}

interface LoginPage extends BasePage {
    usernameSelector: string;
    passwordSelector: string;
    loginButtonSelector: string;
}

interface FreeTrailPage extends BasePage {
    usernameSelector: string;
    submitButtonSelector: string;
}

let loginPage: LoginPage = { // object creation using an interface
    url: "/login",
    title: "Login Page",
    usernameSelector: "#username",
    passwordSelector: "#password",
    loginButtonSelector: "#login_btn"
}

let freeTrailPage: FreeTrailPage = { // object creation using an interface
    url: "/free-trail",
    title: "Login Page",
    usernameSelector: "#username",
    submitButtonSelector: "#submit"
}

console.log("URL:", loginPage.url);
console.log("Title:", loginPage.title);
console.log("Username field:", loginPage.usernameSelector);

console.log("-----");

console.log("URL:", freeTrailPage.url);
console.log("Title:", freeTrailPage.title);
console.log("Username field:", freeTrailPage.usernameSelector);

// Output is
// URL: /login
// Title: Login Page
// Username field: #username
// -----
// URL: /free-trail
// Title: Login Page
// Username field: #username
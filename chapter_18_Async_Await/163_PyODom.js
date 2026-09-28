function openBrowser() {
    return new Promise(function (resolve) {
        resolve ("Browser opened!");
    });
}

function goToLogin() {
    return new Promise(function (resolve) {
        resolve ("Login page loaded!");
    });
}

function enterCredentials() {
    return new Promise(function (resolve) {
        resolve ("Credentials entered!");
    });
}

function clickLogin() {
    return new Promise(function (resolve) {
        resolve ("Logged in successfully!");
    });
}

async function runTheE2E() {
    let msg1 = await openBrowser();
    console.log(msg1); // Browser opened!
    let msg2 = await goToLogin();
    console.log(msg2); // Login page loaded!
    let msg3 = await enterCredentials();
    console.log(msg3); // Credentials entered!
    let msg4 = await clickLogin();
    console.log(msg4);// Logged in successfully!
    console.log(msg1, msg2, msg3, msg4); // Browser opened! Login page loaded! Credentials entered! Logged in successfully!
}

runTheE2E();

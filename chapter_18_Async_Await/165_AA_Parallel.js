function apiCall(name) {
    return new Promise(function (resolve) {
        setTimeout(function() {
            resolve (name, "200 ok")
        }, 2000);            
    })
}

async function parallelTest() {
    let[r1, r2, r3] = await Promise.all([apiCall("Login"), apiCall("Dashboard"), apiCall("Report")]);
    console.log(r1);
    console.log(r2);
    console.log(r3);
}

parallelTest();
// Login
// Dashboard
// Report
let apiCall = new Promise (function (resolve, reject) {
    resolve ({
        status: 200, body: "User data"
    })  
});

apiCall.then(function (response){
    console.log(response); // { status: 200, body: 'User data' }
    console.log(response.status); // 200
    console.log(response.body); // User data

});
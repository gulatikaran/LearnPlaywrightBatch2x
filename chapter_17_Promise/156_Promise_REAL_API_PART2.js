let apiCall = new Promise (function (resolve, reject) {
    reject("500 error"); 
});

apiCall.then(function (data){
    console.log("Success or Resolve");
}).catch (function (error) {
    console.log(error);
}) // 500 error
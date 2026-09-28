function makeRetryTracker(max) {
    let attempt = 0;
    function tryAgain(testName) {
        attempt ++;
        if (attempt > max) {
            return `${testName} exceeded max. tries (${max})`;
        } else {            
            return `Attempt ${attempt}/${max} for ${testName}`;
        }
    }
    return tryAgain;    
}

let retry = makeRetryTracker(3);
console.log(retry("Login Test")); // Attempt 1/3 for Login Test
console.log(retry("Login Test")); // Attempt 2/3 for Login Test
console.log(retry("Login Test")); // Attempt 3/3 for Login Test
console.log(retry("Login Test")); // Login Test exceeded max. tries (3)

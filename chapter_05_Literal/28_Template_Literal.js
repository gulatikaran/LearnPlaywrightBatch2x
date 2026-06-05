// Template Literal

let firstName = "Karan";
let fullName = `Hi! my name is ${firstName} Gulati`;
console.log(fullName); // Hi! my name is Karan Gulati

const env= "staging";
const userId = 12345;
const apiUrl = `https://api-${env}.tekion.com/users/${userId}`;
console.log(apiUrl); // https://api-staging.tekion.com/users/12345

let env1= "staging";
env1 = "prod";
const userId1 = 12345;
const apiUrl1 = `https://api-${env1}.tekion.com/users/${userId1}`;
console.log(apiUrl1); // https://api-prod.tekion.com/users/12345

//Playwright
const rowIndex = 3;
const columnName = "email";
await page.locator(`[data-row="${rowIndex}"] [data-col="${columnName}"]`).click();

//Logs
const testName = "Login Test";
const status = "FAILED";
const duration = 2.3;
console.log(`[${testName}] - Status: ${status}, Duration: ${duration} seconds`);
// [Login Test] - Status: FAILED, Duration: 2.3 seconds

const testCase = "checkout_flow";
const timestamp = Date.now();
await page.screenshot({ path: `screenshots/${testCase}_${timestamp}.png` });


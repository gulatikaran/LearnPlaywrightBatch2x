interface APIResponse {
    readonly statusCode: number;
    body: string;
    headers?: object;
    responseTime?: number
}

// readonly
// Readonly- Can't modify the readonly.
// ?- optional

let response: APIResponse = {
    statusCode: 200,
    body: '{"user" : "admin"}',
};
console.log("Status:", response.statusCode);
console.log("Body:", response.body);
console.log("Headers:", response.headers);

// Output:
// Status: 200
// Body: {"user" : "admin"}
// Headers: undefined

// response.statusCode = 404; // Not possible as it is readonly.
response.body = "abcdef";
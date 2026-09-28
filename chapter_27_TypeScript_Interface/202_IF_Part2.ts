interface APIResponse {
    body: string;
    headers?: object; // ? means this parameter is optional.
    responseTime?: number;  // ? means this parameter is optional.
}

let response1: APIResponse = {
    body: 'Hi'
}

let response2: APIResponse = {
    body: 'Hi',
    headers: {},
    responseTime: 400

}
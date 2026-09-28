enum HTTPMethod {
    Get = "GET",
    Post = "POST",
    Put = "PUT",
    Delete = "DELETE"
}

function sendRequest(method: HTTPMethod, endpoint: string): void {
    console.log(method + " " + endpoint + " -> 200 ok");
}

sendRequest(HTTPMethod.Get, "/api/users");
sendRequest(HTTPMethod.Post, "/api/users");
sendRequest(HTTPMethod.Delete, "/api/users/1");

// Output:
// GET /api/users -> 200 ok
// POST /api/users -> 200 ok
// DELETE /api/users/1 -> 200 ok
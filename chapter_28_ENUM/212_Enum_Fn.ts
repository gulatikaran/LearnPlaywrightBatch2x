// Enum with function

// If value not given to a key, index value will appear in the output.
// If value given to a key, value will appear in the output.

enum Severity {
    LOW, // Index = 0
    MEDIUM, // Index = 1
    HIGH, // Index = 2
    CRITICAL, // Index = 3
    BLOCKING // Index = 4
}
console.log(Severity.LOW); // 0

enum Severity1 {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high",
    CRITICAL = "critical",
    BLOCKING = "blocking"
}
console.log(Severity1.LOW); // low



// Enums are used for optimize the code.
enum Environment {
    Dev = "https://dev.api.com",
    Staging = "https://staging.api.com",
    QA = "https://qa.api.com",
    Prod = "https://api.com"

}
console.log(Environment.QA); // https://qa.api.com

if ((Environment.QA) === "https://qa.api.com") {
    // do this
}
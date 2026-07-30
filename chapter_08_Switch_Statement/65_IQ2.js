let testScore = 85;
switch (true) {
    case (testScore >= 95):
        console.log("Outstanding - Top performer");
    case (testScore >= 85):
        console.log("Excellent - Above expectations");
    case (testScore >= 70):
        console.log("Good - Meet expectations");
    case (testScore >= 50):
        console.log("Needs Improvement");
    default:
        console.log("Unsatisfactory - Requires training");
}
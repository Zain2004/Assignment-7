// Water Temperature Checker in JavaScript

// Prompt the user to enter water temperature
let temperature = Number(prompt("Enter the water temperature in Celsius:"));

// Check the temperature range using if-else
if (temperature <= 0) {
    console.log("Freezing");
} else if (temperature > 0 && temperature <= 15) {
    console.log("Cold");
} else if (temperature > 15 && temperature <= 30) {
    console.log("Warm");
} else if (temperature > 30) {
    console.log("Hot");
} else {
    console.log("Invalid Input");
}

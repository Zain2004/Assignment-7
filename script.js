// Light Bulb Experiment in JavaScript

// Prompt the user to enter a value
let userInput = prompt("Enter 1 to turn ON the light or 0 to turn it OFF:");

// Convert input to a number
let lightState = Number(userInput);

// Check the light bulb state using if-else
if (lightState === 1) {
    console.log("The light is ON");
} else if (lightState === 0) {
    console.log("The light is OFF");
} else {
    console.log("Invalid Input");
}
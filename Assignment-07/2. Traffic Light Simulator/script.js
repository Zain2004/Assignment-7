// Traffic Light Simulator in JavaScript

// Prompt the user to enter a traffic light color
let userInput = prompt("Enter a traffic light color (Red, Yellow, Green):").toLowerCase();

// Check the traffic light state using if-else
if (userInput === "red") {
    console.log("Stop");
} else if (userInput === "yellow") {
    console.log("Slow Down");
} else if (userInput === "green") {
    console.log("Go");
} else {
    console.log("Invalid Color");
}
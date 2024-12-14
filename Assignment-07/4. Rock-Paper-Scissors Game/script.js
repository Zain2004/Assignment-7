// Rock-Paper-Scissors Game in JavaScript

// Prompt players to enter their choices
let player1 = prompt("Player 1: Enter rock, paper, or scissors:").toLowerCase();
let player2 = prompt("Player 2: Enter rock, paper, or scissors:").toLowerCase();

// Determine the winner using if-else conditions
if (player1 === player2) {
    console.log("It's a Tie!");
} else if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "paper" && player2 === "rock") ||
    (player1 === "scissors" && player2 === "paper")
) {
    console.log("Player 1 Wins!");
} else if (
    (player2 === "rock" && player1 === "scissors") ||
    (player2 === "paper" && player1 === "rock") ||
    (player2 === "scissors" && player1 === "paper")
) {
    console.log("Player 2 Wins!");
} else {
    console.log("Invalid Input. Please enter rock, paper, or scissors.");
}

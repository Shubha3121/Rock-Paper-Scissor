# Rock-Paper-Scissor

## Features
Randomized Computer Logic: Uses Math.random() to generate unpredictable moves.

Case-Insensitive Input: Accepts "rock", "ROCK", "RocK", etc., for a smoother user experience.

Five-Round Format: Plays a full match consisting of five individual rounds.

Score Tracking: Maintains a running tally of human vs. computer points within the game scope.

## Game Logic Overview
### 1. Computer Choice (getComputerChoice)
The computer generates a random number between 0 and 1. Based on this value, it returns either "rock", "paper", or "scissors".

### 2. Human Choice (getHumanChoice)
The game utilizes the browser prompt() method to capture user input.

### 3. Round Execution (playRound)
Each round compares the two choices based on standard rules:

Rock beats Scissors

Paper beats Rock

Scissors beats Paper

The function announces the winner in the console and increments the respective score variable.

### 4. Game Management (playGame)
The entire match is encapsulated in a playGame function. It initializes the scores to 0 and triggers five consecutive rounds, declaring an ultimate winner at the end based on the final tally.

## How to Run
Clone this repository or download the source files.

Open the index.html file in any modern web browser.

Open the Developer Tools (F12 or Right-click > Inspect) and navigate to the Console tab.

Follow the prompts on your screen to play.

## Implementation Notes
No Arrays Required: Logic is handled via conditional statements.

Scope: Variables for humanScore and computerScore are kept internal to the game function to prevent global scope pollution.

Function Reuse: Helper functions are utilized to ensure the code remains DRY (Don't Repeat Yourself).
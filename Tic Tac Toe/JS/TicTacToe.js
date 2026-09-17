// Get all nine Tic Tac Toe cells from the HTML page.
const cells = document.querySelectorAll(".cell");

// Get the paragraph used to display the current game status.
const statusText = document.getElementById("status");

// Get the restart button.
const resetButton = document.getElementById("resetButton");

// Store the current value of each board position.
// An empty string means that square has not been played yet.
let board = ["", "", "", "", "", "", "", "", ""];

// Player X starts the game.
let currentPlayer = "X";

// This variable determines whether players are still allowed to make moves.
let gameActive = true;

// These are all possible winning combinations on a Tic Tac Toe board.
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Add a click event to every cell on the board.
cells.forEach(function(cell) {
    cell.addEventListener("click", handleCellClick);
});

// Add a click event to the restart button.
resetButton.addEventListener("click", restartGame);


// This function runs whenever a player clicks a square.
function handleCellClick(event) {

    // Find which cell was clicked by reading its data-index value.
    const clickedCell = event.target;
    const clickedIndex = Number(clickedCell.getAttribute("data-index"));

    // Do nothing if the cell is already used or the game has ended.
    if (board[clickedIndex] !== "" || gameActive === false) {
        return;
    }

    // Save the current player's mark in the board array.
    board[clickedIndex] = currentPlayer;

    // Display the player's X or O in the clicked cell.
    clickedCell.textContent = currentPlayer;

    // Check whether this move ended the game.
    checkResult();
}


// This function checks for a win, draw, or continuation of the game.
function checkResult() {

    let roundWon = false;

    // Check every possible winning combination.
    for (let i = 0; i < winningCombinations.length; i++) {

        const combination = winningCombinations[i];

        const a = board[combination[0]];
        const b = board[combination[1]];
        const c = board[combination[2]];

        // Skip this combination if one of its cells is still empty.
        if (a === "" || b === "" || c === "") {
            continue;
        }

        // If all three values match, the current player has won.
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    // End the game and display the winner.
    if (roundWon) {
        statusText.textContent = "Player " + currentPlayer + " wins!";
        gameActive = false;
        return;
    }

    // If there are no empty spaces left, the game is a draw.
    if (!board.includes("")) {
        statusText.textContent = "It's a draw!";
        gameActive = false;
        return;
    }

    // Switch from X to O, or from O to X.
    currentPlayer = currentPlayer === "X" ? "O" : "X";

    // Tell the players whose turn is next.
    statusText.textContent = "Player " + currentPlayer + "'s turn";
}


// This function resets the entire game so the players can start again.
function restartGame() {

    // Clear all values from the board array.
    board = ["", "", "", "", "", "", "", "", ""];

    // Set the starting player back to X.
    currentPlayer = "X";

    // Allow moves again.
    gameActive = true;

    // Clear the X and O marks from every HTML cell.
    cells.forEach(function(cell) {
        cell.textContent = "";
    });

    // Reset the status message.
    statusText.textContent = "Player X's turn";
}

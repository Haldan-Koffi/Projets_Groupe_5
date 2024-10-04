// Display the word to guess as dashes ("_").
// Ask the user to input a letter each turn.
// Update the displayed word if the letter is correct, otherwise increment the number of errors.
// Show a message of victory or defeat.




let wordList = ["cat", "dog", "bird"]; 
let word = wordList[Math.floor(Math.random() * wordList.length)]; 
let guessesLeft = 3;
let hiddenWord: string[] = [];

// fill hiddenWord with blanks 
for (let i = 0; i < word.length; i++) {
    hiddenWord.push("_");
}

// function to show the current state of the word
function displayWord() {
    alert(hiddenWord.join(" ")); 
}

// function to check if a guessed letter is in the word
function guessLetter(letter: string) {
    let correctGuess = false;

    // Check each letter of the word
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            hiddenWord[i] = letter;
            correctGuess = true;
        }
    }

    // guesses left
    if (!correctGuess) {
        guessesLeft--;
        alert("Wrong guess! " + guessesLeft + " guesses left.");
    }

    // display the updated word
    displayWord();

    // Check if the player has won or lost
    if (hiddenWord.join("") === word) {
        alert("You won! The word was: " + word);
    } else if (guessesLeft === 0) {
        alert("Game over! The word was: " + word);
    }
}

// start of the game
function startGame() {
    alert("Welcome to Hangman!");
    displayWord(); // Show the hidden word with blanks

    // asking the user
    while (guessesLeft > 0 && hiddenWord.join("") !== word) {
        let guess = prompt("Guess a letter: "); // Ask the player to input a letter
        if (guess && guess.length === 1) {
            guessLetter(guess.toLowerCase());
        } else {
            alert("Please enter a single letter."); // If input is not valid
        }
    }
}
startGame();

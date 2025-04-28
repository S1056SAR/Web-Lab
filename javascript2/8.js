// Simple Word Guessing Game
// Global variables
let wordLetters = []; // Array to hold the letters of the word
let guessedLetters = []; // Array to hold the current guessed letters
let reward = 0; // Reward amount
let wrongGuesses = 0; // Track wrong guesses for hangman bonus
let guessedLettersHistory = []; // Keep track of all guessed letters

// Function to set up the game
function setupGame() {
    // Get a word from the user
    const word = prompt("Enter a word for someone to guess:").toUpperCase();
    
    if (!word) {
        alert("Please enter a valid word!");
        return false;
    }
    
    // Split the word into letters
    wordLetters = word.split('');
    
    // Initialize guessedLetters array with underscores
    guessedLetters = Array(wordLetters.length).fill('_');
    
    // Reset other game variables
    reward = 0;
    wrongGuesses = 0;
    guessedLettersHistory = [];
    
    // Display initial state
    console.log("Word to guess: " + guessedLetters.join(' '));
    return true;
}

// Function to guess a letter
function guessLetter(letter) {
    // Convert letter to uppercase for consistency
    letter = letter.toUpperCase();
    
    // Check if the letter has already been guessed
    if (guessedLettersHistory.includes(letter)) {
        console.log(`You've already guessed '${letter}'! Try another letter.`);
        return;
    }
    
    // Add the letter to the guessed letters history
    guessedLettersHistory.push(letter);
    
    // Flag to check if the letter is in the word
    let foundMatch = false;
    let matchCount = 0;
    
    // Iterate through the word letters
    for (let i = 0; i < wordLetters.length; i++) {
        // Check if the guessed letter matches the current letter
        if (wordLetters[i] === letter) {
            guessedLetters[i] = letter;
            foundMatch = true;
            matchCount++;
        }
    }
    
    // Update game state based on the guess
    if (foundMatch) {
        // Generate a random reward amount between 50 and 100 for each matched letter
        const letterReward = Math.floor(Math.random() * 51) + 50;
        const totalReward = letterReward * matchCount;
        reward += totalReward;
        
        console.log(`Congratulations! You found ${matchCount} '${letter}'(s)!`);
        console.log(`You earned $${totalReward}! Total reward: $${reward}`);
    } else {
        // Subtract from reward for wrong guess
        const penalty = Math.floor(Math.random() * 30) + 20;
        reward -= penalty;
        wrongGuesses++;
        
        console.log(`Sorry, '${letter}' is not in the word.`);
        console.log(`You lost $${penalty}. Total reward: $${reward}`);
        
        // Hangman bonus: Check if player has lost
        if (wrongGuesses >= 6) {
            console.log("Game over! You've been hanged!");
            console.log("    ________");
            console.log("    |      |");
            console.log("    |      O");
            console.log("    |     /|\\");
            console.log("    |     / \\");
            console.log("____|____");
            console.log(`The word was: ${wordLetters.join('')}`);
            return;
        }
    }
    
    // Display the current state
    console.log("Current word: " + guessedLetters.join(' '));
    
    // Check if the word has been completely guessed
    if (!guessedLetters.includes('_')) {
        console.log("Congratulations! You've guessed the entire word!");
        console.log(`The word was: ${wordLetters.join('')}`);
        console.log(`Your final reward: $${reward}`);
    }
}

// Function to play the game interactively
function playGame() {
    if (!setupGame()) {
        return;
    }
    
    // Get user guesses
    let playing = true;
    while (playing) {
        const guess = prompt(`Current word: ${guessedLetters.join(' ')}\nGuessed letters: ${guessedLettersHistory.join(', ')}\nGuess a letter, or type 'quit' to stop:`);
        
        if (!guess || guess.toLowerCase() === 'quit') {
            playing = false;
            console.log(`Game ended. The word was: ${wordLetters.join('')}`);
            alert(`Game ended. The word was: ${wordLetters.join('')}`);
        } else if (guess.length !== 1) {
            alert("Please enter exactly one letter!");
        } else {
            guessLetter(guess);
            
            // Check if game is over (all letters guessed or too many wrong guesses)
            if (!guessedLetters.includes('_') || wrongGuesses >= 6) {
                playing = false;
                
                if (!guessedLetters.includes('_')) {
                    alert(`Congratulations! You've guessed the entire word: ${wordLetters.join('')}\nYour final reward: $${reward}`);
                } else {
                    alert(`Game over! You've been hanged! The word was: ${wordLetters.join('')}`);
                }
            }
        }
    }
}

// Start the game
playGame();
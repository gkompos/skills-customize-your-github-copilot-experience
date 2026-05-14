
# 📘 Assignment: Games in Python - Hangman

## 🎯 Objective

Build a text-based Hangman game to practice core Python skills such as loops, conditionals, string handling, lists, and user input.

## 📝 Tasks

### 🛠️ Build the Core Hangman Loop

#### Description
Create the main game logic for Hangman. The program should choose a secret word, let the player guess one letter at a time, and show progress after each guess.

#### Requirements
Completed program should:

- Store a predefined list of possible words and randomly select one at the start of the game.
- Display the word as hidden letters using underscores, such as `_ _ _ _`.
- Ask the user to enter one letter per turn.
- Reveal correctly guessed letters in all matching positions.
- Keep previously guessed letters visible in the displayed progress.

### 🛠️ Add Win/Lose Rules and Player Feedback

#### Description
Add game-ending conditions and clear feedback so players understand how they are doing and why the game ends.

#### Requirements
Completed program should:

- Track incorrect guesses and reduce remaining attempts only for wrong letters.
- Prevent duplicate guesses from being counted twice.
- End with a win message when the full word is revealed.
- End with a lose message when attempts reach zero, and display the correct word.
- Print friendly status updates each turn, including guessed letters and attempts remaining.

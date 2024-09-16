# Bulls and Cows

A fun number guessing game where the player tries to guess a secret 4-digit number consisting of unique digits. The player receives hints in the form of "bulls" and "cows" to help guide their guesses.

![cow icon](assets/cow.svg) ![bull icon](assets/bull.svg)

## How to Play

1. The computer generates a random 4-digit number with unique digits (e.g., `1234` is valid, but `1123` is not).
2. The player must guess the secret number.
3. After each guess, the player is provided with:
   - **Bulls:** Correct digits in the correct position.
   - **Cows:** Correct digits, but in the wrong position.
4. The game continues until the player guesses the correct number with 4 bulls.
5. The player can choose to play another round after successfully guessing the number.

### Example

**Secret Number:** `4271`

Player's guess: `1234`  
Hint: 1 Bull, 2 Cows

- The bull is `2`, as it is in the correct position.
- The cows are `4` and `1`, as they exist in the secret number but are in the wrong positions.

## Game features

- **Randomized Secret Number:** The computer generates a unique 4-digit number at the start of each game.
- **Hints (Bulls & Cows):** After each guess, the game provides feedback on how many digits are correct (bulls) and how many are misplaced (cows).
- **Replay Option:** After winning, the player can choose to play another round with a new secret number, without exiting the program.
- **Input Validation:** The game ensures the player's guess is a valid 4-digit number with unique digits.
- **Chalk Integration:** Console text is colorized using the `chalk` library to enhance the user experience.

## Game setup

1. Clone the repository:
   ```bash
   git clone git@github.com:diecatiamonteiro/bulls-and-cows-game.git
   ```

2. Install the required packages:
   ```bash
   npm install readline-sync chalk
   ```
3. To start the game, run:
   ```bash
   node index.js
   ```

## Game preview

Here is an overview of the game Bulls and Cows.

![game intro](/assets/game-intro.png)

(...)

![game example](/assets/game-won-exit.png)

## Thanks for reading. I hope you enjoy the game!

// 'BULLS AND COWS' GAME

/** Summary:
 * - Imports dependencies: readline-sync for user input and chalk for styling text.
 * - Generates a secret number: Creates a random 4-digit number with unique digits.
 * - Displays game rules: Shows how to play and asks if the user is ready.
 * - Collects user guesses: Prompts the user to enter a 4-digit guess.
 * - Validates guesses: Ensures guesses are 4 unique digits.
 * - Gives hints: Provides feedback on how many digits are correct and in the right position (bulls) or wrong position (cows).
 * - Main game loop: Plays the game, provides hints, and handles winning. Asks if the user wants to play another round and exits or continues based on their response.
 */

// ------------------------------------------------------------ step 0 - import dependencies

import readlineSync from "readline-sync";
import chalk from "chalk";

// ------------------------------------------------------------ step 1 - generate secret number

// This function generates a random 4-digit secret number with unique digits.
function generateSecretNumber() {
  let digits = [];

  while (digits.length < 4) {
    let randomDigit = Math.floor(Math.random() * 10);

    if (!digits.includes(randomDigit)) {
      digits.push(randomDigit);
    }
  }

  return digits.join("");
}

// ------------------------------------------------------------ step 2 - display rules & ask if user is ready to play

// This function provides an overview of the game rules and checks if the user is ready to start playing.
function showIntroduction() {
  console.log(chalk.green.bold(`\nWELCOME TO THE 'BULLS AND COWS' GAME!`));
  console.log(chalk.white.bold("\nRules:"));
  console.log(
    "1. The secret number consists of 4 unique digits. Unique means each digit appears only once. For example, 0134 is valid, but 0304 is not because zero is repeated."
  );
  console.log("2. Your goal is to guess this secret number.");
  console.log("3. After each guess, you will receive a hint:");
  console.log("   - Bulls: Correct digits in the correct position.");
  console.log("   - Cows: Correct digits but in the wrong position.");
  console.log("4. Continue guessing until you find the secret number.");
  console.log("\nGood luck!");

  let ready;

  do {
    ready = readlineSync
      .question(chalk.green("\nAre you ready to start playing? (yes/no): "))
      .toLowerCase();

    if (ready === "no") {
      console.log(
        chalk.yellow(
          "\n We look forward to seeing you next time! Goodbye! 👋\n"
        )
      );
      process.exit(); // Exit the program if user is not ready
    } else if (ready !== "yes") {
      console.log(chalk.red('Please type "yes" to start or "no" to exit.'));
    }
  } while (ready !== "yes");

  console.log(chalk.bold("\nLet's start the game!"));
}

// ------------------------------------------------------------ step 3 - collect user's guesses (linked to step 4)

// This function collects the user's guess and ensures it meets the criteria.
function getUserGuess() {
  let guess;

  do {
    guess = readlineSync
      .question("\nEnter your guess (4 unique digits): ")
      .trim();
  } while (!isValidGuess(guess));

  return guess;
}

// ------------------------------------------------------------ step 4 - validate user's guess (linked to step 3)

// This function validates whether the user's guess meets the criteria (4 digits && all unique).
function isValidGuess(guess) {
  if (!/^\d{4}$/.test(guess)) {
    console.log(chalk.red("Invalid input. Please enter exactly 4 digits."));
    return false;
  }

  let uniqueDigits = new Set(guess); // 'Set' removes duplicates

  if (uniqueDigits.size !== 4) {
    console.log("Digits must be unique."); // If 'guess' contains duplicates, the size will be less than the length of 'guess'.
    return false;
  }

  return true;
}

// ----------------------------------------------- step 5 - give user hints (number of bulls & cows)

// This function compares the user's guess with the secret number and calculates how many "bulls" and "cows" the guess has.
function getHints(secretNumber, guess) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (guess[i] === secretNumber[i]) {
      bulls++; // if digits have the same index(position)
    } else if (secretNumber.includes(guess[i])) {
      cows++; // if digits exist in secret number
    }
  }

  return { bulls, cows };
}

// ----------------------------------------------- step 6 - main function to play the game

// This function implements the main game loop.
function playGame() {
  // Display rules to start
  showIntroduction();

  // When user wants to play
  let playAgain = "yes";

  while (playAgain === "yes") {
    const secretNumber = generateSecretNumber();
    let bulls = 0;
    let guess;

    do {
      guess = getUserGuess();

      const hints = getHints(secretNumber, guess);

      bulls = hints.bulls;

      if (bulls === 4) {
        console.log(
          chalk.green.bold(
            `\nWOO-HOO! 🎉 You've guessed the number ${secretNumber} correctly!\n`
          )
        );
      } else {
        console.log(
          chalk.blue(
            `${hints.bulls} Bull(s) and ${hints.cows} Cow(s). Try again!`
          )
        );
      }
    } while (bulls !== 4); // Continue until the user guesses the correct number

    // Ask if user wants to play another round
    playAgain = readlineSync
      .question(chalk.green("\nDo you want to play another round? (yes/no): \n"))
      .toLowerCase();

    if (playAgain === "no") {
      console.log(chalk.yellow("\nSee you next time! Goodbye! 👋\n"));
      process.exit();
    } else if (playAgain !== "yes") {
      console.log(
        chalk.red('Please type "yes" to play again or "no" to exit.')
      );
    }
  }
  while (playAgain !== "yes" && playAgain !== "no");
}

// ----------------------------------------------- step 7 - start the game

playGame();

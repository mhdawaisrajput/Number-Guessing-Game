#!/usr/bin/env node

import inquirer from "inquirer";
// 1) Computer Will generate a random number (Done)
// 2) User input for guessing number (Done)
// 3) Compare user input with computer generated number and show result (Done)
const randomNumber = Math.floor(Math.random() * 5 + 1);
console.log("Thrilled Welcome to Number Guessing Game Prepared by: Muhammad Awais.");
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess a Number Between 1-5: ",
    },
]);
// Statement (If / Else):
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations ! You Guessed a Right Number.");
} else {
    console.log("Sorry ! You Guessed a Wrong Number.");
}
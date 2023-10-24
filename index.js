#! /usr/bin/env node
import inquirer from "inquirer";
const computergenratednumber = Math.floor(Math.random() * 10);
const answer = await inquirer.prompt([
    {
        message: "Write the number between 1 to 10",
        type: "number",
        name: "userGuess"
    }
]);
const { userGuess } = answer;
if (userGuess === computergenratednumber)
    [
        console.log(userGuess, "userGuess", computergenratednumber),
        console.log("You win")
    ];
else {
    console.log(userGuess, "", "userGuess", "", computergenratednumber),
        console.log("Please try again");
}

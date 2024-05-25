#!/usr/bin/env node 
import inquirer from "inquirer";
let number = Math.floor(Math.random() * 100 + 1);
let score = 100;
for (let chances = 99; chances >= 0; chances--) {
    let usr = await inquirer.prompt([{
            name: "input",
            message: "enter your guess number here:",
            type: "number"
        }]);
    if (usr.input === number) {
        console.log("\nyour guess is right.");
        break;
    }
    else if (usr.input < number) {
        console.log("\nyour guess is lower, try higher number");
    }
    else if (usr.input > number) {
        console.log("\nyou guess is higher, try lower number");
    }
    else {
        console.log("\nNot a number");
    }
    console.log(`your remaining chances are:${chances}\n`);
    score--;
}
console.log(`your score is :${score}`);
console.log(`the right number is:${number}`);

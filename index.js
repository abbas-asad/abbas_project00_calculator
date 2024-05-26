#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second nummber", type: "number", name: "secondNumber" },
    {
        message: "Please select an operator to execute the operation:",
        type: "list",
        name: "operators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// Addition
if (answer.operators === "Addition") {
    console.log("Your answer is: " + (answer.firstNumber + answer.secondNumber));
}
// Subtraction
else if (answer.operators === "Subtraction") {
    console.log("Your answer is: " + (answer.firstNumber - answer.secondNumber));
}
// Multiplication
else if (answer.operators === "Multiplication") {
    console.log("Your answer is: " + (answer.firstNumber * answer.secondNumber));
}
// Division
else if (answer.operators === "Division") {
    console.log("Your answer is: " + (answer.firstNumber / answer.secondNumber));
}
else {
    console.log("Syntax error");
}

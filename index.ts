#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const answer = await inquirer.prompt([
  {
    message: chalk.ansi256(194)("Enter first number"),
    type: "number",
    name: "firstNumber",
  },
  {
    message: chalk.ansi256(185)("Enter second number"),
    type: "number",
    name: "secondNumber",
  },
  {
    message: "Select one of the operators to perform action",
    type: "list",
    name: "operator",
		choices: [{ value: "Addition" }, { value: "Subtraction" }, { value: "Multiplication" }, { value: "Division" }, { value: "Exponentiation" }],
  },
]);

// conditional statements
if (answer.operator === "Addition") {
  console.log(chalk.bold.blueBright(answer.firstNumber + answer.secondNumber));
} else if (answer.operator === "Subtraction") {
  console.log(chalk.bold.blueBright(answer.firstNumber - answer.secondNumber));
} else if (answer.operator === "Multiplication") {
  console.log(chalk.bold.blueBright(answer.firstNumber * answer.secondNumber));
} else if (answer.operator === "Division") {
  console.log(chalk.bold.blueBright(answer.firstNumber / answer.secondNumber));
} else if (answer.operator === "Exponentiation") {
  console.log(chalk.bold.blueBright(answer.firstNumber ** answer.secondNumber));
} else {
  console.log(chalk.bold.red("Please select valid operator"));
}

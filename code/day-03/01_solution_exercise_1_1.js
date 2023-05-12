let readlineSync = require('readline-sync');
let number1 = Number(readlineSync.question("What's the first number?"));
let number2 = Number(readlineSync.question("What's the second number?"));

if (number1 == number2) {
    console.log("None of them is larger. They are the same!");
} else if (number1 > number2) {
    console.log(number1 + "is larger");
} else {
    console.log(number2 + "is larger");
}
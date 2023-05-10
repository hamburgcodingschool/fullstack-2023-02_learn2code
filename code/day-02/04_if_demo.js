let readlineSync = require('readline-sync');
let age = Number(readlineSync.question("What's your age? "));
if (age < 18) {
    console.log("You can not buy alcohol!")
    console.log("Please put it back to the shelf!")
} else {
    console.log("You can buy alcohol!")
    console.log("Cheers!")
}

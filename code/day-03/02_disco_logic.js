// exercise in the class: imagine a discotheque
// the thought process behind the counter could be something like this:
// * if they're old enough and sober enough, they can have another drink
// * if they're old enough but too drunk, they should have some water first
// * if they're too young, the have to leave
// task: put that logic into a program

// I have added the full solution here, we haven't gotten around to discuss it yet.
// I did put it because maybe it helps with the other exercises. If you have any questions about it, let me know.

let readlineSync = require('readline-sync');
let age = Number(readlineSync.question("What's the age?"));
let isTooDrunkAnswer = readlineSync.question("Do they look too drunk?");

let isTooDrunk = isTooDrunkAnswer == "yes";

// many possibilities to put this logic:

if (age >= 18 && !isTooDrunk) {
    console.log("have another drink!");
} else if (age >= 18 && isTooDrunk) {
    console.log("you should have some water instead.");
} else {
    console.log("you have to leave!")
}
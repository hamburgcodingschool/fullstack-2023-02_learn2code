let readlineSync = require("readline-sync");

console.log("PROGRAM STARTS HERE");
// let score = 100;
// if I try access words here, it will fail:
// console.log(words.length);
let words = "These are my words"; // I can now use this variable "words"
console.log(words.length);
console.log("Your words have length: " + words.length);
// console.log(score);
// console.log("Hello");
// console.log("Ciao.");

// let newWords = readlineSync.question("What words should I add? ");
let newWords = "test";
// console.log(newWords);

// update our words with new Words added
words = words + newWords;
console.log("The updated 'words' variable is now:" + words);
console.log("Your words have now length: " + words.length);

// Summary:
// * console.log is our function, we call it with a parameter in parentheses
// * "things (to be discussed later) can be asked with "." to do something
// * variables (define with let) can be changed

// a variable can be initialed (such that it "exists")
// without a value (it will have value "undefined")

console.log("Solution to exercise 6 starts here");
let score = readlineSync.question("What's the score? ");

// inside the parentheses is a condition
// "is 100 <= 24"?? => no. => false.
let failCondition = score <= 24;
let passedWithBCondition = score >= 80;
let passedWithACondition = score >= 90;

console.log("My fail condition is: " + failCondition);
if (failCondition) {
  // something happens inside here
  // if condition is "true"
  console.log("You failed with an F");
}
if (passedWithBCondition) {
  console.log("You have passed with a B");
}
if (passedWithACondition) {
  console.log("You succeeded with an A");
}

// Rest as homework: Think about how to repair this program,
// such that is only prints ONE grade

console.log("PROGRAM ENDS HERE");

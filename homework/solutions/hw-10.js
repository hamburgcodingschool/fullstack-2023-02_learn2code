// ask the user for a number
let readlineSync = require("readline-sync");

let n = readlineSync.questionInt("What is the number to sum up to?");

// intermediate goal: write a loop that prints the numbers from 1 to n => check
// intermediate goal #2: use a second variable to store the result / the sum

let i = 1;
let sum = 0;

while (i <= n) {
  console.log(i);

  // (for some of you: this is an accumulator, if you want to look it up. BUT: OPTONAL!)
  // I do intermediate calculation in every step of the loop:
  // "Add my looping variable to the intermediate result"
  sum = sum + i;

  // this is my "looping variable" (don't change this line)
  i = i + 1; // update i to the next value (i + 1)   i: 1, 2, 3, 4, 5, 6, ... 7, 8, 9, 10, 11
}
console.log("after the loop i is: " + i);

// calculate the sum of the numbers

// print the sum of the numbers

console.log("The result is: " + sum);

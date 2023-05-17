let readlineSync = require("readline-sync");

console.log("Solution to exercise 6 starts here");
let score = Number(readlineSync.question("What's the score? "));
let country = readlineSync.question("What's the country [Germany/USA]? ");

console.log("Score Input:" + score);

let germanOutput = country == "Germany";
// "intialize" variable without a value
let grade;

// input gets "converted" first
if (score >= 90) {
  grade = 1;
} else if (score >= 80) {
  grade = 2;
} else if (score >= 70) {
  grade = 3;
} else if (score >= 65) {
  grade = 4;
} else if (score >= 25) {
  grade = 5;
} else {
  grade = 6;
}
// "debugging"
console.log("Intermediate result:" + grade);

// output gets printed
if (germanOutput) {
  console.log("Deine Note ist: " + grade);
} else {
  // USA / English outpt
  if (grade == 1) {
    console.log("You got an A");
  }
  if (grade == 2) {
    console.log("You got a B");
  }

  if (grade == 3) {
    console.log("You got a C");
  }

  if (grade == 4) {
    console.log("You got a D");
  }

  if (grade == 6 || grade == 5) {
    console.log("You got an F");
  }
  // ...
}

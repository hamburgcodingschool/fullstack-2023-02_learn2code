let readlineSync = require("readline-sync");
// 1.1

console.log("Welcome to the number comparing program!");
let answer = readlineSync.question(
  "Do you want to compute two or three numbers? [two/2, three/3] "
);
if (answer == "two" || answer == "2") {
  console.log("Comparing Two Numbers");
  let a = Number(readlineSync.question("Give me the first number "));
  console.log(a);
  let b = readlineSync.questionInt("Give me the second number ");

  let largest;
  if (a > b) {
    largest = a;
  } else {
    largest = b;
  }
  console.log(
    "When comparing " + a + " and " + b + ", then " + largest + " is largest."
  );
} else if (answer == "three" || answer == "3") {
  // 1.2
  console.log("Comparing Three Numbers");
// &&
  if (a > b) {
    // we know that b can be greatest
    if (a > c) 
}

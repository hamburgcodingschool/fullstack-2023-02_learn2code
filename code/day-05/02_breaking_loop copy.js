let readlineSync = require("readline-sync");
// there are two options to "stop" a loop
// 1. change the condtion (make it false
// 2. use a break

// task: write a program that prints 1 to 10 with using "break"
// leave line 8 alone
let number = 1;
while (true) {
  console.log(number);
  number += 1;
  readlineSync.question("pause");
  // "decide when we want we to go out of loop"
  if (number > 10) {
    break;
  }
}
console.log("Program ends here");

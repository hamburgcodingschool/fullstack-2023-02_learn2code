console.log("Program starts");

// 1. exercise: change this infinite loop, such that it prints "Hello" only _one_ time
let condition = true;
while (condition) {
    console.log("Hello");
    // hint: your change HERE
}

// Here's another loop, counting up from 0 to 9.
// Tasks:
// - write a loop that prints the numbers from 1 to 100
// - write a program that prints the number 2, 4, 6, 8, ...., 20
// - write a program that prints 1, 2, FIZZ, 4, 5, FIZZ, 7, 8, FIZZ, 10, ... , 98, FIZZ, 100
//      => explanation:(this is advanced. Print "FIZZ" every time number is divisible by 3)
let number = 0;
while (number < 10) {
  // console.log("Hello");
  console.log(number);
  // take the right side of "=" and put as new value to variable on the left
  number = number + 1;
}
console.log("Program ends");

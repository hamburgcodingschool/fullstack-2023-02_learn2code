// next task:
// write a program that prints 1, 2, FIZZ, 4, 5, FIZZ, 7, 8, FIZZ, 10, ... , 98, FIZZ, 100
console.log("for loop starts");
// my "looping variable" is i
for (let i = 1; i <= 10; i += 1) {
  let remainderByThree = i % 3;
  let isDivisibleByThree = remainderByThree == 0;
  if (isDivisibleByThree) {
    console.log("Fizz");
  } else {
    console.log(i);
}
console.log("Program ends here");

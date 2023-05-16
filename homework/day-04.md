# Homework Day 4

- [Exercise 10: Sum loop](#exercise-10)
- [Exercise 11: Sum or product](#exercise-11)
- [Exercise 12: hashtag triangle](#exercise-12)
- [Exercise 13: Fizz Buzz](#exercise-13)
- [Exercise 14: Sum only threes and fives](#exercise-14)
- [Exercise 15: Fault tolerant dungeon](#exercise-15)

## Exercise 10
### Sum loop
Write a program that asks the user for a number `n` and prints the sum of the numbers `1` to `n`.

> **Example:**<br />
> User inputs `5`<br />
> Output:<br />
> `1 + 2 + 3 + 4 + 5 = 15`

## Exercise 11
### Sum or product
Modify Exercise 10 so that the program asks the user for a number `n` and gives them the possibility to choose between computing the sum or computing the product of 1 to n.


## Exercise 12
### hashtag triangle

This is Exercise 2.1 of the "Eloquent Javascript" book.

Write a loop that makes seven calls to console.log to output the following triangle:

```
#
##
###
####
#####
######
#######
```

It may be useful to know that you can find the length of a string by writing .length after it.

```
let abc = "abc";
console.log(abc.length);
// → 3
```

## Exercise 13
### Fizz Buzz

This is a very common programming exercise, and I copied the description from "Eloquent Javascript" Ex 2.2:

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)

## Exercise 14
### Sum only threes and fives
Modify the Exercise 10 so that only multiples of three or five are considered in the sum.

> **Example:**<br />
> User inputs `17`<br />
> Output:<br />
> `3 + 5 + 6 + 9 + 10 + 12 + 15 = 60`


## Exercise 15
### Fault tolerant dungeon

This exercise assumes you have looked at Exercise 8, the dungeon. Again it's more on the creative and open ended side if you consider it fun to write little commandline games and are done with all the other exercises. It's an advanced exercise because I don't give a lot of context here, but feel free to reach out to me if you want to know more!

Task: Think about how to extend the dungeon with loops. This is possible in a couple of ways:
* "Answer loop": If the user does not give you a valid answer, ask again until they give a valid answer
* "Gameloop": How can it be possible to enter a room and then go back to another room?

Hint: The main structure could be something like this:
```
let answerIsValid = false;
// initially the answer is undefined
let answer;
while(!answerIsValid) {
    // ask for a new answer
    // recompute if the answer is valid
}
// next step would be to do something with the answer
```

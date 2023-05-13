## Exercise 5
### Boolean Operator Box
In this exercise you can go back to https://editor.p5js.org/ to apply your knowledge on boolean operators.

### Exercise 5.1
Starting with this template (you can also find it online [here](https://editor.p5js.org/zormit/sketches/GTUoGvtE0)):
```JavaScript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  // this code prepares the sketch for the exercise
  background(220);
  fill(200, 0, 0);
  rectMode(CORNER);
  // Hint: If you want to simplify, replace this with some fixed values first.
  // (e.g. width / 2 would be 200) and try to put a solution down with fixed values.
  // Later extend it to variables again.
  rect(width / 2, height / 2, width / 2, height / 2);
  rectMode(CENTER);

  // you only need to change the code from here
  fill(255);
  rect(mouseX, mouseY, 40);
}
```

*Task*: Make the rectangle turn blue (or any color you fancy) when it's inside the red box

### Exercise 5.2
Now the task stays the same (make rectangle change color inside the red box), but the box moves to the center, like [this](https://editor.p5js.org/zormit/sketches/tzRITvfJa):
```JavaScript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  // this code prepares the sketch for the exercise
  background(220);
  fill(200, 0, 0);
  rectMode(CORNER);
  // Hint: If you want to simplify, replace this with some fixed values first.
  // (e.g. width / 4 would be 100) and try to put a solution down with fixed values.
  // Later extend it to variables again.
  rect(width / 4, height / 4, width / 2, height / 2);
  rectMode(CENTER);

  // you only need to change the code from here
  fill(255);
  rect(mouseX, mouseY, 40);
}
```

## Exercise 6
### Calculate grade.

As you might now, in the USA basic school grades are from A (best) to F (failed), while in Germany they are from 1 (best) to 6 (failed). Decide for one system.

Then write a program that asks for a score between 0 and 100 and converts that to a grade:
| from | to | grade US | grade DE |
| ---- | -- | -------- | -------- |
| 0 | 24 | F | 6 |
| 25 | 64 | doesn't really exist, but you can put E | 5 |
| 65 | 69 | D | 4 |
| 70 | 79 | C | 3 |
| 80 | 89 | B | 2 |
| 90 | 100 | A | 1 |

Stretch goal: Include some intermediate grades, e.g. B+, D- as well.

## Exercise 7

### Multilingual Greeting
When the program starts, ask the user which language they want to select, then greet the user. It should default to English if the user input doesn't match to a language.

Hint: This is similar to Exercise 6, but you have more freedom (for example which languages do you want?), so it's a bit more tricky.

Stretch Goal: Combine Exercise 6 and 7. First ask for country system to grade in, then ask for a score. Output should be according to the table in that country.

## Exercise 8
### In a dungeon find the spaghetti monster

This is an open ended creative exercise that shows you that you can already program a little game. I put an example [here](08_dungeon.js), and you can use that however you want to create your own little text adventure game.

Here are some steps how you could start:
1. Try and run the code without reading it first, to have the "gaming experience".
2. Probably you need to run it multiple times to play through the game :D
3. Now read the code and try to understand how it's connected to the gameplay.
4. Modify the code a little bit and see if it had the desired effect
5. Add some rooms and options to the dungeon and have fun! :)

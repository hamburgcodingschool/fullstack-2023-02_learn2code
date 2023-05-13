# Summary of what we talked about

These summaries are not meant to be comprehensive, and it will probably only make sense to you if you have attended the session.

## Day 3 -- 2023-05-12
* Coditional Logic Extended
    * `if ... else`, `if ... else if ... else`
    * Transforming your code into a logical flow-diagram
        * How to draw multiple if statements in such a diagram?
* Introduction to Boolean Operators
    * Binary (`a && b`, `a || b`) vs. Unary (`!a`)
* More Comparison Operators
    * Equality (`==`) and Inequality (`!=`)

## Day 2 -- 2023-05-10

* set up a VSCode developer environment for JavaScript with the help of NodeJS
    * First, NodeJS needed to be downloaded and installed from https://nodejs.org/en/download
    * on the way to get going we learned a _lot_ about the terminal
        * the terminal program that is configured for your system let's you start `node`
        * you can exit `node` by typing `.exit`, but this doesn't work for the terminal program itself ("Command not found" or something similar)
        * you can not run `node` inside `node` (`Uncaught ReferenceError: node is not defined`)
        * run `node` followed by a filename to run a script, e.g. `node hello.js`
        * how folders and directories are the same thing with a different name
        * in the terminal, `pwd` shows you where you are and `ls` shows you what files are there.
            * `pwd` stands for "print working directory"
            * `ls` stands for "list files"
        * why terminal is named terminal
            * open question: is there a good dictionary of programmer words?
* repeat what we discussed on Monday & work on some exercises to apply that knowledge
    * what's the difference between frontend and backend javascript?
    * in `node` we don't have `prompt` available (why? most don't need it in the backend!)
        * using `npm` to install a package called [readline-sync](https://www.npmjs.com/package/readline-sync)
        * using `readline-sync` to communicate with the user on the terminal
    * what is a programming library? a framework? why do we need things on top of the programming language? what is below?
    * currency converter exercise
        * converting the user input into a number
        * store that into a variable and calculate the output
        * example of how to make code nicer
            * by going "step by step" and use "speaking variable names" in each of the steps
* talk more about basic datatypes, you will get to know the boolean data type and apply that using conditional logic statements (`if`/`else`)
    * how binary ("ones and zeroes") leads to booleans naturally
    * binary operators
        * mathematical operators
        * conditional operators
    * how the `if` statement looks like
        * why it's recommended to always add the `{`/`}` to denote the block
        * adding an optional `else` block

## Day 1 -- 2023-05-08

* Brainstorming: "What is programming?"
    * Telling a computer (program) what to _do_
    * User Interaction
        * Input
        * Output
    * Programming Language
        * Examples
            * JavaScript
            * Python
            * PHP
            * C++
            * ...
        * Syntax: The rules of the programming language
* How JavaScript runs in the browser
* Experiments with the developer console
    * Using the console as a calculator
    * Simple user interaction with `prompt()`/`alert()`
* Introduction to [p5js editor](https://editor.p5js.org/)
* Exploring JavaScript with p5js
    * exploring the _parameters/arguments_ of `createCanvas` and `background`
    * drawing basic shapes and exploring their parameters
    * order matters! (causing shapes to be over each other)
        * procedural (imperative) programming
    * RGB colors
    * the `draw()` function runs in a loop => causes possibly unexpected effects
        * changing the framerate to make this effect visible
    * following the mouse with variables called `mouseX`/`mouseY`
* General programmer skills
    * trial & error: playing with what you have & trying it out
    * knowing/checking the right documentation
    * set a goal and try to reach it
        * example: how to put mouse in middle of square?
* Introduction to Variables
    * identifying variables in the code
    * defining a variable with `let`
    * using it in different places
    * (preview) scope of a variable
        * e.g. `print` can be different in different places
* Book Recommendation: [Eloquent JavaScript](https://eloquentjavascript.net/) (it's freely available)
* (preview for next session) Data Types
    * Numbers
    * Strings

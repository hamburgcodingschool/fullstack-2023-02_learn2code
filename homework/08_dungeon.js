// This file belongs to "Day 3 Exercise 8"
let readlineSync = require("readline-sync");
console.log("You are standing in front of a dungeon. Are you ready to enter?");
/*
Here's a little map for the developer:

      -------
      |     |
      |  T  |
      |     |
---------D---
|     |     |
D     D     E <--- Entrance
|     |     |
---D---------
|     |
|  S  |
|     |
-------
D: door (closes behind you)
S: spaghetti monster
T: trap door (can be anywhere, really when player types something wrong)

*/
let answer = readlineSync.question("y/n? ");
if (answer == "y") {
  console.log(
    "Welcome to the Dungeon! Be careful, as every misstep can be fatal."
  );
  console.log("You are entering a room with two doors ([a]head/[r]ight).");
  console.log(
    "Also there's a sign that reads 'Find the spaghetti monster to receive eternal programming wisdom!'."
  );
  console.log("Which door do you continue?");
  answer = readlineSync.question("a/r? ");
  if (answer == "a") {
    console.log(
      "You go into the room ahead of you. It's a relatively dark room."
    );
    console.log(
      "You see two doors ([a]head/[l]eft). The one ahead of you shows a glimmer of light through the keyhole."
    );
    console.log("Which door do you continue?");
    answer = readlineSync.question("a/l? ");
    if (answer == "a") {
      console.log(
        "Turns out the glimmering light was sunshine. You are out of the dungeon again."
      );
      console.log(
        "Behind you the dungeon collapses. You go your ways finding the next dungeon."
      );
    } else if (answer == "l") {
      console.log("You open the door to your left.");
      console.log(
        "You meet the almighty spaghetti monster flying in the middle of the room."
      );
      console.log(
        "'Welcome to my world!' it says and throws two links at you."
      );
      console.log("https://en.wikipedia.org/wiki/Flying_Spaghetti_Monster");
      console.log("https://en.wikipedia.org/wiki/Spaghetti_code");
    } else {
      console.log(
        "Because you couldn't decide between two doors (not a valid answer), you step onto a spider. The spider explodes. The world ends."
      );
    }
  } else if (answer == "r") {
    console.log(
      "You go into the room right of you. The door behind you disappears."
    );
    console.log("In the middle of the room there's a pot of water.");
    console.log(
      "Once you get closer, you see it's frozen. There are no doors left in this room."
    );
    console.log("You turn into a frozen statue. The world ends.");
  } else {
    console.log(
      "Because you couldn't decide between two doors (not a valid answer), you crash into a wall. The dungeon collapses."
    );
  }
} else if (answer == "n") {
  console.log(
    "Okay, not everyone can be a brave adventurer that finds a spaghetti monster. Have a great day!"
  );
} else {
  console.log(
    "You seem undecided, this is not a valid answer. The world collapses."
  );
}

// Remarks:
// 1. Of course this is a bit limited and we will soon learn more helpful things, such as loops,
//    such that our world does not need to collapse at every misstep. But hey, it's a first game!
// 2. This might look ridiculous to you. Too simple, if you know the concept of if and else. Too bloated.
//    But there's a reason I spent a few hours of my time creating this dungeon example for you: I believe it can teach you important skills:
//     * There are programs working similar like this. Guiding a user through a website can be the same concept, for example.
//       There is a lot of spaghetti code out there.
//     * The steps from thinking about a dungeon and deciding which decisions the user has and getting the map right is an
//       important conceptual step. Try it yourself! (ok, you can maybe skip the nice story if you don't feel like it)
//     * You need to start somewhere. We could go from here and extend it step by step into something like https://writtenrealms.com/.

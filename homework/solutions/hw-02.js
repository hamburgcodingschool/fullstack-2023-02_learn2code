"use strict";
var readlineSync = require("readline-sync");

console.log("Welcome to Beachwalk Hotel!");

// note: it's not obvious that the conversion to int works well here.
let guests = Number(readlineSync.question("How many guests (1 or 2)? "));
// console.log(guests == 2);
let nights = readlineSync.questionInt(
  "How many nights would you like to stay? "
);
let wants_breakfast = readlineSync.keyInYN(
  "Would you like to have breakfast included?"
);

//let room_types = ['Normal room', 'Deluxe room', 'Deluxe suites'];
// let room_prices_per_night = [90, 120, 150];
// let index = readlineSync.keyInSelect(room_types, 'Which room type would you like to have?');
let price_per_night = 90;
if (guests == 2) {
  price_per_night += 10;
}

let price_breakfast = 10;

let discount_percent = 0;
if (nights >= 5) {
  discount_percent = 10;
}
if (nights >= 10) {
  discount_percent = 15;
}
if (nights >= 15) {
  discount_percent = 20;
}
let room_price = price_per_night * nights;
if (discount_percent > 0) {
  let discount = (room_price * discount_percent) / 100;
  console.log(
    "Thank for being a valued customer. You'll get a discount of " +
      discount_percent +
      "%, which equals to " +
      discount +
      "€"
  );
  room_price -= discount;
}

let breakfast_price = price_breakfast * nights * guests;
let full_price = room_price;
if (wants_breakfast) {
  full_price += breakfast_price;
}
console.log("The total is going to be " + full_price + "€");

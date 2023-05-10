let readlineSync = require('readline-sync');
let amountUSD = Number(readlineSync.question("What's the amount in USD? "));
let currency = 0.91;
let amountEUR = amountUSD * currency;
console.log("The amount in EURO is: " + amountEUR);
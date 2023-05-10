let readlineSync = require('readline-sync');
let name = readlineSync.question("What's your name?");
console.log("Hello " + name + "!");
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
 });
 
 function waitForUserInput() {
   rl.question("Command: ", function(answer) {
     if (answer == "exit"){
         rl.close();
     } else {
         waitForUserInput();
     }
   });
 }
 
 waitForUserInput();
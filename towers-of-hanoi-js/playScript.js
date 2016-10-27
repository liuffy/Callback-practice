const Game = require ("./game");
const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let newGame = new Game();
newGame.run(reader, completion);


function completion(){
  reader.question("Play again? (y/n): ", restartAnswer =>{
    if (restartAnswer === "y"){
      newGame = new Game();
      newGame.run(reader,completion);
    } else{
      console.log("Ok, bye!!!!")
      reader.close();
    }
  });
};


const Board = require('./board');

class Game {
  constructor(){
    this.board = new Board();
    this.currentPlayer = Board.marks[0];
  }
  // From Towers of Hanoi
  // promptMove(reader, callback){
  //   this.print();
  //   reader.question("Where would you like to take a disc FROM?: ", fromTower => {
  //   const startTowerIdx = parseInt(fromTower);
  //   reader.question('Where would you like to move this disc TO?: ', toTower =>{
  //   const endTowerIdx = parseInt(toTower);
  //   console.log(`You want to take a disc off from tower ${startTowerIdx} and slide it onto tower ${endTowerIdx}.`)
  //   callback(startTowerIdx, endTowerIdx);
  //     });
  //   });
  // }

  promptMove(reader, callback){
    const game = this;
    this.board.print(); // show board
    reader.question(`Where would you like to place your mark (${this.currentPlayer})? First, enter the row: `, requestedRow =>{
      const rowRequest = parseInt(requestedRow);
      reader.question('Now enter the column: ', requestedCol =>{
      const colRequest = parseInt(requestedCol);
      callback(rowRequest, colRequest);
      });
    });
  }

  playMove(pos){
    this.board.placeMark(pos, this.currentPlayer);
    this.swapTurn();
  }

  swapTurn(){ // good
    this.currentPlayer = (this.currentPlayer == Board.marks[0] ? Board.marks[1] : Board.marks[0]);
  }

  isOver(){
    return (this.board.isOver());
  }

  winner(){
    return this.board.winner();
  }

  // Towers of Hanoi

  // run(reader, completionCallback){
  //   this.promptMove(reader,(startTowerIdx, endTowerIdx) =>{
  //     if (this.move(startTowerIdx, endTowerIdx) === false){
  //       console.log("That's not a valid move!");
  //     }
  //
  //     if (!this.isWon()){
  //       this.run(reader, completionCallback);
  //     } else{
  //       this.print();
  //       console.log("YOU WON!!!")
  //       completionCallback();
  //     }
  run(reader, gameCompletionCallback){
    this.promptMove(reader, (move) =>{
      if (this.playMove(move) === false){
          console.log ("error at playmove!!");
      }

      if (this.isOver()){
        this.board.print();
          if (this.winner()){
            console.log(`${this.winner()} has won! :-)`)
          } else {
            console.log("Cat's game. Nobody won!")
          }
        gameCompletionCallback();
      }
      else {
        this.run(reader, gameCompletionCallback);
        }
    });
  }
}
module.exports = Game;

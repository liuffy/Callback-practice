

class Game {
  constructor(){
    this.towers = [[3,2,1], [],[]];
  }

  isValidMove(startTowerIdx, endTowerIdx){
    const startTower = this.towers[startTowerIdx];
    const endTower = this.towers[endTowerIdx];
    const topStartDisc = startTower[startTower.length - 1];
    const topEndDisc = endTower[endTower.length - 1];

    if (endTower.length === 0 && startTower.length ===0){
      // console.log('You just chose from two empty towers...')
      return false;
    }
    else if (endTower.length === 0){
      // console.log('Well, it turns out: you can do this!');
      return true;
    }
    else if (startTower.length === 0){
      // console.log("Unfortunately, this is not a valid move.");
      return false;

    }  else { // if the top disc from the fromTower is less than the top disc from the toTower
      return (topStartDisc < topEndDisc);
    }
  }

  promptMove(reader, callback){
    this.print();
    reader.question("Where would you like to take a disc FROM?: ", fromTower => {
    const startTowerIdx = parseInt(fromTower);
    reader.question('Where would you like to move this disc TO?: ', toTower =>{
    const endTowerIdx = parseInt(toTower);
    console.log(`You want to take a disc off from tower ${startTowerIdx} and slide it onto tower ${endTowerIdx}.`)
    callback(startTowerIdx, endTowerIdx);
      });
    });
  }

  move(startTowerIdx, endTowerIdx){
    if (this.isValidMove(startTowerIdx, endTowerIdx)){
      this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop());
    } else {
      return false;
    }
  }

  print(){
    console.log(JSON.stringify(this.towers));
  }

  isWon(){
    return (this.towers[1].length === 3 || this.towers[2].length === 3)
  }

  run(reader, completionCallback){
    this.promptMove(reader,(startTowerIdx, endTowerIdx) =>{
      if (this.move(startTowerIdx, endTowerIdx) === false){
        console.log("That's not a valid move!");
      }

      if (!this.isWon()){
        this.run(reader, completionCallback);
      } else{
        this.print();
        console.log("YOU WON!!!")
        completionCallback();
      }
    });
  }
}

module.exports = Game;

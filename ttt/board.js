
Board.marks = ['x','o'];

class Board {
  constructor(){
    this.grid = Board.makeGrid();
  }

  isEmptyPos(pos){
    return (this.grid[pos[0]][pos[1]] === null);
  }

  isOver(){
    if (this.winner != null){
      return true;
    }
    // If there's no winner, we'll have to go row by row and check if there are any missing spaces
    for (let i = 0; i < 3; i++){
      for (let j = 0 ; j <3, j++){
        if (this.isEmptyPos(pos)){
          return false;
        }
      }
    }
    return true;
  }

  placeMark(pos, mark){
    if (!this.isValidPos(pos)){
      throw new error ('Invalid move!!!');
    } else {
      this.grid[pos[0]][pos[1]] = mark;
    }
  }

  print(){
    for (var rowIdx = 0; rowIdx  <3 ; rowIdx ++){
      const marks = [];
      for (var colIdx = 0; colIdx < 3 ; colIdx ++){
        const strings = [];
        marks.push(
          this.grid[rowIdx][colIdx] ? this.grid[rowIdx][colIdx] : "_");
      } // Now you have something like this: ['x', 'x', 'o','x','o','x','o','x','o']
        strings.push(`${marks.join("|")} \n`);
    }
    console.log(strings.join('--------------\n'))

  }

  winner(){ // returns winning mark or null 
    const winningSeqs = [
      // Horizontal wins
      [[0,0],[0,1],[0,2]], // winningSeq 1
      [[1,0],[1,1],[1,2]], // winningSeq 2
      [[2,0],[2,1],[2,2]], // winningSeq 3
      // Vertical wins
      [[0,0],[1,0],[2,0]],
      [[0,1],[1,1],[2,1]],
      [[0,2],[1,2],[2,2]],
      // Diagonals
      [[0,0],[1,1],[2,2]],
      [[2,0],[1,1],[0,2]],
    ]// list winning positions
    // if grid has any of these, winner is the mark at that mark

    for (var i = 0; i < winningSeqs.length; i++){ // go through every winning sequence
      const winner = this.winnerHelper(winningSeqs[i]);
      if (winnerHelper(winningSeqs[i])){ // if winnerHelper returns truthy
        return winner;
      }
    }
    return null;
    }
  }

  winnerHelper(winningSeq){ // this compares the board against the winning sequence, looking for 3 in a row of
    // the SAME mark (it checks for the presence of the expected mark)
    // ex: [[2,0],[1,1],[0,2]] Is there a X at 2,0? Is there a X at 1,1? Is there an X at 0,2?
    for (let markIdx = 0; markIdx < Board.marks.length; markIdx++){
      let expectedMark = Board.marks[markIdx];
      let winner = true; // true unless it comes across a mark that doesn't match
      for (let posIdx = 0; posIdx < 3; posIdx ++){
        const pos = winningSeq[posIdx] // this represents an individual position to check
        const actualMark = this.grid[pos[0]][pos[1]]; // the actual mark on the board

        if (expectedMark != actualMark){
          winner = false;
        }
      }
      if (winner){
        return expectedMark;
      }
    }
    return null;
  }

  static isValidPos(pos){ // good
    return ((pos[0] >= 0) && (pos[0] < 3) && (pos[1] < 3) && (pos[1] < 3)); // everything is in bounds
  }

  static makeGrid(){ // good
    const grid = [];
    for(let i =0; i < 3; i++){
      let row = new Array(3);
      grid.push(row);
    }
  }
// End of functions
}

module.exports = Board;

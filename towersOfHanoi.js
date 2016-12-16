Array.prototype.last = function() {
  return this[this.length - 1];
};

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class towersOfHanoi {
  constructor() {
    // this.input = reader;
    this.towers = [
      [1,2,3],
      [],
      []
    ];
  }

  isValidMove(move) {
    if (this.towers[move[1]].length === 0) {
      return true;
    } else if (this.towers[move[1]].last() > this.towers[move[0]].last()) {
      return false;
    }
  }

  isWon() {
    return this.towers[2].length === 3;
  }

  move(new_pos) {
    this.towers[new_pos[1]].push(this.towers[new_pos[0].pop()]);
  }

  render() {
    console.log(`${this.towers[0]}\n${this.towers[1]}\n${this.towers[2]}`);
  }

  askMove(callback) {
    let returnMove = reader.question('What is your move?', function(move) {
      return move;
    });

    return returnMove.split(", ").map(function(el) { return parseInt(el); } );
  }

  run(gameCompletionCallback) {
    //check if the game has won
    //ask player for a move
    //validate move
    //make move or redirect
    //render the status of towers
    //run until all the pieces are in order in the last peg
    while (this.isWon()) {
      console.log('is it running?');
      let roundMove = this.askMove();

      if (this.isValidMove(roundMove)) {
        reader.close();
        this.move(roundMove);
      }

      this.render();
    }
  }
}

// const game = new towersOfHanoi();
// let towers = new towersOfHanoi;
// towers.run();
// module.exports = towersOfHanoi;

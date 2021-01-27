// Pig dice
// Game object {round,}
// Player object {Name, Score, designation}
// Die Array

//Functions (Die roll)
//let rolled =
// Math.floor(Math.random() * 7)
// const randomElement = array[Math.floor(Math.random() * array.length)];
// if rolled = 2-6
// turnCount += dieRoll
// show point total of roll
// else 
// turnCount = 0
//end turn

// Function (endTurn)
// player1.score += turnCount
// if player1.score >= 100 end game
// turnCount = 0
// update scoreboard

// function Game() {    // New Game Button
//   this.round = 0;
//   this.playerOne = 0;
//   this.playerTwo = 0;
// }

function Player(name, score)  {
  this.playerName = playerName;
  this.score = score;
}

let turnCount = 0;
Game.prototype.dieRoll = function () { // Roll Button
  let rolled = Math.floor(Math.random() * 6) + 1;
  //document.getElementById("demo").innerHTML = "rolled"; 
  if (rolled >= 2) {
    turnCount += rolled;
  } else {
    turnCount = 0;
    endTurn();
  }
}

Game.prototype.endTurn = function () { // Hold Button
  if (parseInt(this.round) % 2 = 0) {
    this.score += turnCount;
    if (this.score >= 100) {
      // some win game screen
      // end game
    }
    turnCount = 0;
    //update scoreboard with Game.player scores
  } else {
    this.playerTwo += turnCount;
    if (this.playerTwo >= 100) {
      // some win game screen
      // end game
    }
    turnCount = 0;
    //update scoreboard with Game.player scores
  }
  this.round++;
}

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

function Game() {   // New Game Button
  this.round = 1;
  this.players = {};
  this.currentId = -1;
}

function Player(nameName) {
  this.name = nameName;
  this.score = 0;
  this.turnCount = 0;
}
// On Start New Game
//  let playerOne = new Player();
//  let playerTwo = new Player();
let newGame = new Game();

Game.prototype.addPlayer = function (player) {
  player.id = this.assignId();
  this.players[player.id] = player;
}

Game.prototype.assignId = function (id) {
  this.currentId += 1;
  return this.currentId;
}
let XX = 0;
Player.prototype.dieRoll = function () { // Roll Button
  XX = newGame.round % 2;

  $("#turnOver").hide();
  $("#turnOverOne").hide();
  document.getElementById("roundCount").innerHTML = newGame.round;
  let rolled = Math.floor(Math.random() * 6) + 1;
  document.getElementById("currentRoll").innerHTML = rolled;
  if (rolled >= 2) {
    newGame.players[XX].turnCount += rolled;
    document.getElementById("turnTotal").innerHTML = newGame.players[XX].turnCount;
    if (newGame.players[XX].turnCount + newGame.players[XX].score >= 100) {
      document.getElementById("winScreen").innerHTML = newGame.players[XX].name + " wins the game!";
      $("#winScreen").show();
      $(".rollbuttons").hide();
      $("#playAgain").show();
      return;
    }
    // if (this.turnCount + this.playerTwo >= 100) {
    //   document.getElementById("winScreen").innerHTML = this.name + " wins the game!";
    //   $("#winScreen").show();
    //   $(".rollbuttons").hide();
    //   $("#playAgain").show();
    //   return;
    // }
  } else {
    this.turnCount = 0;
    newGame.round++;
    $("#turnOverOne").show();
    $(".rollbuttons").hide();
  }
}

Player.prototype.endTurn = function () { // Hold Button
  XX = newGame.round % 2;
  //if (newGame.round % 2 === ) {
  // if (newGame.player[] % 2 === 1)
  // if (XX = 0) {
  newGame.players[XX].score += this.turnCount;
  $(".rollbuttons").hide();
  this.turnCount = 0;
  document.getElementById("name" + XX + "Score").innerHTML = newGame.players[XX].score;
  // } else if (XX = 1) {
  // this.score += this.turnCount;
  //  $(".rollbuttons").hide();
  //  this.turnCount = 0;
  //  document.getElementById("nameTwoScore").innerHTML = this.score;
  // }
  // }else {
  //   newGame.players[2];
  // }


  // } else {
  //   this.playerTwo += this.turnCount;
  //   $(".rollbuttons").hide();
  //   this.turnCount = 0;
  //   document.getElementById("nameTwoScore").innerHTML = this.playerTwo;
  // }
  newGame.round++;
  $("#turnOverOne").hide();
  $("#turnOver").show();
}

Game.prototype.playAgain = function () {
  location.reload();                  //.reload();
}
function closeWindows() {
  $("#turnOverOne").hide();
  $("#turnOver").hide();
  $(".rollbuttons").show();
}
// UI logic
$(document).ready(function () {
  $("#nameForm").submit(function (event) {
    event.preventDefault();
    playerOneName = $("#playerOneName").val();
    playerTwoName = $("#playerTwoName").val();

    let playerOne = new Player(playerOneName);
    let playerTwo = new Player(playerTwoName);
    newGame.addPlayer(playerOne);
    newGame.addPlayer(playerTwo);

    $("#nameOne").text(playerOne.name + ": ");
    $("#nameTwo").text(playerTwo.name + ": ");
    $("#start").hide();
    $("#winScreen").hide();
    $("#playAgain").hide();
    $(".rollbuttons").show();
    $("#nameForm").hide();


  });
});



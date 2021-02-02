 export function Game() {   
  this.round = 1;
  // this.players = {};
  // this.currentId = -1;
}

export function Player(nameName) {
  this.name = nameName;
  this.score = 0;
  this.turnCount = 0;
}

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
Player.prototype.dieRoll = function () { 
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

  } else {
    this.turnCount = 0;
    newGame.round++;
    $("#turnOverOne").show();
    $(".rollbuttons").hide();
  }
}

Player.prototype.endTurn = function () { 
  XX = newGame.round % 2;

  newGame.players[XX].score += this.turnCount;
  $(".rollbuttons").hide();
  this.turnCount = 0;
  document.getElementById("name" + XX + "Score").innerHTML = newGame.players[XX].score;

  newGame.round++;
  $("#turnOverOne").hide();
  $("#turnOver").show();
}

Game.prototype.playAgain = function () {
  location.reload();                  
}
export function closeWindows() {
  $("#turnOverOne").hide();
  $("#turnOver").hide();
  $(".rollbuttons").show();
}
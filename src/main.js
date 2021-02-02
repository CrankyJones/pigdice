// UI logic
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {Game, Player, closeWindows} from './game.js';

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



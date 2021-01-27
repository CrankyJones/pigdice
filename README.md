Test 1
Describe: Game()

Test: Constructor that will create a new game object
Expect Game().toEqual Game(Round)

Describe: Player()

Test: constructor will create a new player object with name, player number, & player score
Expect: Player().toEqual ({Player1 = name: "Player1", playerNumber: "1", score:0})

Describe: dieRoll()

Test: Will output a number between 1-6
Expect: dieRoll().toEqual dieRoll(4)

Test: Will add die rolls with  the value 2-6 to user's score
Expect: dieRoll(4).toEqual turnCount(+= 4)

Test: Will recognize user victory when user score value equals 100 or more
Expect: (player1.score => 100).toEqual($("#victory").show)

Test: Will set user turnCount to 0 if user rolls a value of 1
Expect: dieRoll(1).toEqual turnCount = 0

Test: Will end turn if user rolls a value of 1 
Expect: dieRoll(1).toEqual endTurn()

Describe: endTurn()

Test: Will apply user's turnCount() value to that player's player-object
Expect: endTurn(turnCount += 4).toEqual player1.score = 4

Test: Will show users score on an html scoreboard
Expect: Endturn(player1.score = 4).toEqual ($("#player1score").show)

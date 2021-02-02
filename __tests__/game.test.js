import { Game } from './../src/game.js';

describe('Game', () => { 

test ('Should create a game object with round, players, and currentId properties', () => {
  const gameOne = new Game(1, (1,2), 1);
  expect(gameOne.round).toEqual(1);
  expect(gameOne.players).toEqual(1,2);
  expect(gameOne.currentId).toEqual(1);

})

}




)
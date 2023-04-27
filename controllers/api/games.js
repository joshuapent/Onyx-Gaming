const Game = require('../../models/game');


async function createGame(req, res) {
    try {
      const game = await Game.createGame(req.body);
      res.status(200).json(game)
    } catch (err) {
      res.status(400).json(err);
    }
}

module.exports = {
    createGame,
};
const Game = require('../../models/game');






async function create(req, res) {
    try {
      const game = await Game.create(req.body);
    } catch (err) {
      res.status(400).json(err);
    }
  }
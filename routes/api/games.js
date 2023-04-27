const express = require('express');
const router = express.Router();
const gameCtrl = require('../../controllers/api/games');

router.post('/create', gameCtrl.createGame)


module.exports = router;
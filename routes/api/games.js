const express = require('express');
const router = express.Router();

// Get all games
router.get('/', (req, res) => {
res.json({mssg: 'GET all games'})
})

// Get a single game
router.get('/:id', (req, res) => {
    res.json({mssg: 'Get a single game'})
})

// Post a new game
router.post('/', (req, res) => {
    
    res.json({mssg: 'Post a new game'})
})

// Delte a game
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete a game'})
})

// Update a game
router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update a game'})
})

module.exports = router;
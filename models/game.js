const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const gameSchema = new Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
  });


module.exports = mongoose.model('Game', gameSchema);
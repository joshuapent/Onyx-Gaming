const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const gameSchema = new Schema({
    user: [ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    text: {type: String}
  });

module.exports = mongoose.model('Chat', chatSchema);
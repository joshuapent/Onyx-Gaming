const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const chatSchema = new Schema({
    userA: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    userB: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
  }, {
    timestamps: true,
  }
);

module.exports = mongoose.model('Chat', chatSchema);
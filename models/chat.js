const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    sender_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    recipient_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    text: {
            type: String, 
            required: true
    }
  }, {
    timestamps: true,
  }
);

const chatSchema = new Schema({
    users: 
        [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        }],
    messages: [messageSchema]
  }, {
    timestamps: true,
  }
);



module.exports = mongoose.model('Chat', chatSchema);
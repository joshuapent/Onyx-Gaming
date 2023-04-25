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

module.exports = mongoose.model('Message', messageSchema);
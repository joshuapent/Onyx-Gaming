const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const requestSchema = new Schema({
    sender_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    recipient_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
}, {
    timestamps: true,
});



module.exports = mongoose.model('Request', requestSchema);
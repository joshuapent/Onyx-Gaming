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
    },
    chatID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat'
    }
  }, {
    timestamps: true,
  }
);
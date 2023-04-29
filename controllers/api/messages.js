const Message = require('../../models/message');


async function newMessage(req, res) {
    try {
      const msg = await Message.create(req.body);
      res.json(msg)
    } catch (err) {
      res.status(400).json(err);
    }
}

async function chatMsgs(req, res) {
    try {
      const msgs = await Message.find({chatID: req.params.id});
      res.json(msgs)
    } catch (err) {
      res.status(400).json(err);
    }
}

module.exports = {
    newMessage,
    chatMsgs,
};

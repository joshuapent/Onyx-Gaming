const Chat = require('../../models/chat');
const User = require('../../models/user');

async function findChat(req, res) {
    try {
      const chat = await Chat.find();
      res.json(chat);
    } catch (err) {
      res.status(400).json(err);
    }
}

async function connectUsers(req, res) {
    try {
      const chat = await Chat.create(req.body);
      res.json(chat);
    } catch (err) {
      res.status(400).json(err);
    }
}

async function disconnectUsers(req, res) {
    try {
      const chat = await Chat.deleteMany(req.body);
      res.json(chat);
    } catch (err) {
      res.status(400).json(err);
    } 
}
  

module.exports = {
    connectUsers,
    disconnectUsers,
    findChat
  };
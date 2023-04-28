const Chat = require('../../models/chat');
const User = require('../../models/user');

async function findAllChats(req, res) {
    try {
      const chat = await Chat.find();
      res.json(chat);
    } catch (err) {
      res.status(400).json(err);
    }
}

async function findMyChats(req, res) {
    try {
        const chat = await Chat.find({users: req.params.id}).populate('users').exec();
        res.json(chat);
      } catch (err) {
        res.status(400).json(err);
      }
}

async function findAChat(req, res) {
    try {
        const specificChat = await Chat.findById(req.params.id)
        res.json(specificChat)
    } catch (err) {
        res.status(400).json(err);
    }
}

async function connectUsers(req, res) {
    try {
      console.log('req.body is', req.body)
      const chatObj = {users: [req.body.users[0]._id, req.body.users[1]._id]}
      const chat = await Chat.create(chatObj);
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
    findAllChats,
    findMyChats,
    findAChat,
  };
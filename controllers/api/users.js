const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const Chat = require('../../models/chat');
const Message = require('../../models/message');

async function checkToken(req, res) {
  console.log('req.user -> ', req.user);
  res.json(req.exp);
}

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function editBio(req, res) {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body)
  } catch (err) {
    res.status(400).json(err);
  }
}

async function editRating(req, res) {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body)
  } catch (err) {
    res.status(400).json(err);
  }
}

async function remove(req, res) {
  try {
    await User.findByIdAndDelete(req.body.id)
    await Chat.deleteMany({users: req.body.id})
    await Message.deleteMany({sender_id: req.body.id})
    await findand

  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error("No user found");
    const matchedPassword = await bcrypt.compare(req.body.password, user.password)
    if (!matchedPassword) throw new Error("Password Incorrect");
    const token = createJWT(user);
    res.json(token)
  } catch(err) {
    console.log(err)
    res.status(400).json(err);
  }
}



function createJWT(user) {
  return jwt.sign(
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
    );
  }

async function allUsers(req, res) {
  try {
    const users = await User.find() 
    res.json(users)
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}

async function aUser(req, res) {
  try {
    const user = await User.findById(req.params.id) 
    res.json(user)
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}

module.exports = {
  create,
  login,
  checkToken,
  allUsers,
  aUser,
  remove,
  editBio,
  editRating,
};
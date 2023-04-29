const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
require('dotenv').config();
require('./config/database');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(require('./config/checkToken'))
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

const port = process.env.PORT || 3001;

app.use('/api/users', require('./routes/api/users'));
app.use('/api/games', require('./routes/api/games'));
app.use('/api/chat', require('./routes/api/chat'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const server = app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});

const io = require('./config/socket').init(server);

io.on('connection', (socket) => {
  console.log(`user id: ${socket.id} has connected`);

  socket.on("disconnect", () => {
    console.log(`user id: ${socket.id} has disconnected`);
  })

  socket.on('sendMsg', (msg, convo) => {
    socket.to(convo).emit('newMsg', msg, convo)
  })
  socket.on('enter_convo', (convo) => {
    socket.join(convo)
  })

});
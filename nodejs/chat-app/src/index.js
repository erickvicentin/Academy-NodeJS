// @Node_Modules
const express = require('express');
const Filter = require('bad-words');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');

// @App_constants
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '../public');

const io = socketio(server);

app.use(express.static(publicDirectoryPath));

io.on('connection', (socket) => {
  console.log('New WebSocket connection');

  socket.emit('message', 'Welcome!');
  socket.broadcast.emit('message', 'A new user has joined!');

  socket.on('sendMessage', (message, callback) => {
    const filter = new Filter();

    if (filter.isProfane(message)) {
      return callback('Profanity is not allowed');
    }

    io.emit('message', message);
    callback('Delivered');
  });

  socket.on('disconnect', () => {
    io.emit('message', 'A user has left.');
  });

  // CHALLENGE
  socket.on('sendLocation', (position, callback) => {
    io.emit(
      'message',
      `https://google.com/maps?q=${position.latitude},${position.longitude}`
    );
    callback('Location delivered!');
  });

  //io.emit('msgUpdated', msg);
});

console.clear();
server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

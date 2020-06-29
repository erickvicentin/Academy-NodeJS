// @Node_Modules
const express = require('express');
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

let msg = '';

io.on('connection', (socket) => {
  console.log('New WebSocket connection');

  socket.emit('message', 'Welcome!');
  socket.broadcast.emit('message', 'A new user has joined!');

  socket.on('sendMessage', (message) => {
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    io.emit('message', 'A user has left.');
  });

  // CHALLENGE
  socket.on('sendLocation', (position) => {
    io.emit(
      'message',
      `https://google.com/maps?q=${position.latitude},${position.longitude}`
    );
  });

  //io.emit('msgUpdated', msg);
});

console.clear();
server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

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

app.get('', (req, res) => {
  res.render('index', {
    title: 'Home',
    name: 'Erick Vicentin',
  });
});

io.on('connection', () => {
  console.log('New WebSocket connection');
});

console.clear();
server.listen(port, () => {
  console.log(
    `
Created by Erick Vicentin. Using Node.js with Express.js and Socket.io

--------------------- Server is up on port ${port} ----------------------
`
  );
});

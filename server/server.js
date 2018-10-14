require('./config/config')
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

var app = express();

app.use(express.static(path.join(__dirname,'/../public')));

var server = http.createServer(app);
var io = socketIO(server);

io.on('connection',(socket) => {
  console.log("user connected");

  socket.on('disconnect', () => {
    console.log("User disconnected from server");
  });
});

server.listen(process.env.PORT, () => {
  console.log(`Server is up on port ${process.env.PORT}`);
});

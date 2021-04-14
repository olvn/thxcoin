const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:8080",
  },
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('message', ({ content }) => {
    console.log(content)
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
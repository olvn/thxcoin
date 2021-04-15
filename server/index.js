const express = require("express");
const app = express();
const http = require("http");
const sio = require("socket.io");
const path = require("path");

// Middleware for serving '/dist' directory
const staticFileMiddleware = express.static(path.join(__dirname, "dist"));
app.use(staticFileMiddleware);
const server = http.createServer(app);
const io = sio(server, {
  cors: {
    origin: "http://localhost:8080",
  },
});

// app.get("*", (req, res) => {
//   res.sendfile(path.dirname('../dist/index.html'));
// });

const onlineUsers = new Set();


io.use((socket, next) => {
  const username = socket.handshake.auth.username;
  console.log('username', username)
  socket.username = username;
  next();
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("registerUser", ({ username }, callback) => {
    if (!onlineUsers.has(username)) {
      onlineUsers.add(username);
      callback({
        success: true,
      });
    } else {
      callback({
        success: false,
        reason: 'USERNAME TAKEN'
      });
    }
  });

  socket.on("sentMessage", ({ message }) => {
    io.emit("message", {
      username: socket.username,
      uuid: Date.now(),
      content: message,
    });
  });

  socket.on('disconnect', () => {
    if (socket.username) {
      onlineUsers.delete(socket.username);
    }
    console.log(socket.username, 'disconnected');
  })
});

server.listen(process.env.PORT || 3000, () => {
  console.log("listening");
});

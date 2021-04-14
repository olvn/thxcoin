const express = require("express");
const app = express();
const http = require("http");
const sio = require("socket.io");
const path = require("path");

// Middleware for serving '/dist' directory
const staticFileMiddleware = express.static(path.join(__dirname, 'dist'));
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

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("sentMessage", ({ message }) => {
    io.emit("message", {
      username: "todo",
      uuid: Date.now(),
      content: message,
    });
  });
});

server.listen(process.env.PORT || 3000, () => { 
  console.log("listening");
});

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

const registeredUsers = new Set();
const totals = {}

io.use((socket, next) => {
  const username = socket.handshake.auth.username;
  console.log("username", username);
  socket.username = username;
  next();
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("registerUser", ({ username }, callback) => {
    if (!registeredUsers.has(username)) {
      registeredUsers.add(username);
      callback({
        success: true,
      });
    } else {
      callback({
        success: false,
        reason:
          "USER ALREADY EXISTS.",
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


  socket.on("tickerMessage", ({ message }) => {
    // todo approve via admin panel
    io.emit("approvedTickerMessage", {
      username: socket.username,
      uuid: Date.now(),
      message: message,
    });
  })

  socket.on('updateTotals', ({ coin, usd }) => {
    if (socket.username) {
      totals[socket.username] = {
        coin, usd
      };
    }
  });

  setInterval(() => {
    socket.emit('updateGlobalTotals', totals);
  }, 1000);

  socket.on("disconnect", () => {
    console.log(socket.username, "disconnected");
  });
});

server.listen(process.env.PORT || 3000, () => {
  console.log("listening");
});

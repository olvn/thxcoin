const express = require("express");
const app = express();
const http = require("http");
const sio = require("socket.io");
const path = require("path");

// Middleware for serving '/dist' directory
// const staticFileMiddleware = express.static(path.join(__dirname, "dist"));
// app.use(staticFileMiddleware);
const server = http.createServer(app);
const io = sio(server, {
  cors: {
    origin: "*",
  },
});

console.log('env:', process.env.NODE_ENV)
var forceSsl = function(req, res, next) {
    console.log("protocol", req.headers["x-forwarded-proto"]);
  if (req.headers["x-forwarded-proto"] !== "https") {
    console.log("attempting forward")
    return res.redirect(["https://", req.get("Host"), req.url].join(""));
  }
  return next();
};

  if (process.env.NODE_ENV === "production") {
    app.use(forceSsl);
  }

const registeredUsers = new Set();
const totals = {};

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
        reason: "USER ALREADY EXISTS.",
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

  socket.on("pictureBackground", ({ imageUrl }) => {
    io.emit("unapprovedItem", {
      username: socket.username,
      uuid: Date.now(),
      type: "picture",
      imageUrl,
    });
  });

  socket.on("tickerMessage", ({ message }) => {
    // todo approve via admin panel
    io.emit("unapprovedItem", {
      username: socket.username,
      uuid: Date.now(),
      message: message,
      type: "ticker",
    });
  });

  socket.on("approveItem", (payload) => {
    if (payload.type === "ticker") {
      io.emit("approvedTickerMessage", payload);
    } else if (payload.type === "picture") {
      io.emit("approvedPicture", payload);
    }
  });

  socket.on("updateTotals", ({ coin, usd }) => {
    if (socket.username) {
      totals[socket.username] = {
        coin,
        usd,
      };
    }
  });

  setInterval(() => {
    socket.emit("updateGlobalTotals", totals);
  }, 1000);

  socket.on("disconnect", () => {
    console.log(socket.username, "disconnected");
  });
});

server.listen(process.env.PORT || 3000, () => {
  console.log("listening");
});

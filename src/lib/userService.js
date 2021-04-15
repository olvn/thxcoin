import socket from "@/lib/socket";
// import store from "@/store";

// actions to take from components to emit events
export default {
  registerUser(username) {
    return new Promise((resolve) => {
      socket.emit("registerUser", { username }, (res) => {
        console.log(username, 'attempting register')
        if (res.success) {
          resolve({ success: true });
          socket.disconnect();
          socket.auth = { username };
          socket.connect();
          localStorage.setItem('username', username);
        } else {
          resolve({ success: false, reason: res.reason });
        }
      });
    });
  },
  registerListeners() {
    // update state from listened events
  },
};

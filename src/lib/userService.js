import socket from "@/lib/socket";
// import store from "@/store";

// actions to take from components to emit events
export default {
  registerUser(username) {
    return new Promise((resolve) => {
      socket.emit("registerUser", { username }, (res) => {
        if (res.success) {
          resolve({ success: true });
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

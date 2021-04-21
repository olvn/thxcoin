import socket from "@/lib/socket";
import store from "@/store";

export default {
  registerListeners() {
    socket.on("approvedTickerMessage", ({ message, username }) => {
      console.log("beeee", message, username)
      store.dispatch("Ticker/addMessage", message, username);
    });
  },
};

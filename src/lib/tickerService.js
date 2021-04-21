import socket from "@/lib/socket";
import store from "@/store";

export default {
  registerListeners() {
    socket.on("approvedTickerMessage", ({ messsage, username }) => {
      store.dispatch("Ticker/addMessage", message, username);
    });
  },
};

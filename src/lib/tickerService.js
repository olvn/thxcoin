import socket from "@/lib/socket";
import store from "@/store";

export default {
  randomMessage() {
    return '123412341234';
  },
  stringToTickerArray(s) {
    return s.split('').map(char => {
      return { char };
    });
  },
  registerListeners() {
    socket.on("approvedTickerMessage", ({ message, username }) => {
      console.log("beeee", message, username)
      store.dispatch("Ticker/addMessage", message, username);
    });
  },
};

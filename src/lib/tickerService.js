import socket from "@/lib/socket";
import store from "@/store";

function stringToTickerArray(s) {
  return s.split("").map((char) => {
    return { char };
  });
}
export default {
  randomMessage() {
    const messages = [
      "Area man reads one-third of Infinite Jest three times; claims to have read the book.",
      "Silicon Valley found to lie on fault line that opens directly to hell.",
      "Elon Musk establishes first Martian Arby's.",
      ...Array(20).fill('Visit thxcoin.biz and mine some $THX to put a message here.')
    ].map((msg) => {
      return stringToTickerArray(msg);
    });

    const list = [...messages, ...htmlMessages];

    return list[Math.floor(Math.random() * list.length)];
  },
  stringToTickerArray,
  registerListeners() {
    socket.on("approvedTickerMessage", ({ message, username }) => {
      store.dispatch("Ticker/addMessage", { message, username });
    });
  },
};

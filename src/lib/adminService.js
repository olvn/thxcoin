import socket from "@/lib/socket";
import store from "@/store";

export default {
  approveItem(payload) {
    socket.emit('approveItem', payload);
  },
  registerListeners() {
    socket.on("unapprovedItem", (message) => {
      store.dispatch("Admin/addUnapprovedItem", message);
    });
  },
};

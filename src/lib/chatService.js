import socket from '@/lib/socket'
import store from '@/store'

// actions to take from components to emit events
export default {
  sendMessage(message) {
    socket.emit('sentMessage', { message })
  },
  registerListeners() {
    // update state from listened events
    socket.on('message', (message) => {
      store.dispatch('Chat/addMessage', message);
    });
  }
}

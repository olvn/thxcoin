import socket from '@/lib/socket'
import store from '@/store'

// actions to take from components to emit events
export default {
  updateTotal(total) {
    socket.emit('updateTotal', { total })
  },
  registerListeners() {
    // update state from listened events
    socket.on('updateGlobalTotals', (totals) => {
      store.dispatch('Miner/updateLeaderboard', totals);
    });
  }
}

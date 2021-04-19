import socket from '@/lib/socket'
import store from '@/store'

// actions to take from components to emit events
export default {
  updateTotalCoin() {
    socket.emit('updateTotals', { coin: store.getters['Miner/totalCoin'], usd: store.getters['Miner/totalUsd'] })
  },
  registerListeners() {
    // update state from listened events
    socket.on('updateGlobalTotals', (totals) => {
      store.dispatch('Miner/updateLeaderboard', totals);
    });
  }
}
